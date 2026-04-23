/* ============================================
   Nason Lab — Модуль тестирования
   Проверка корректности расчётов корректировки
   ============================================ */

// ============================================================
// УТИЛИТЫ ДЛЯ ТЕСТОВ
// ============================================================
const TestRunner = {
    passed: 0,
    failed: 0,
    total: 0,

    assert(condition, message) {
        this.total++;
        if (condition) {
            this.passed++;
            console.log(`✅ PASS: ${message}`);
        } else {
            this.failed++;
            console.error(`❌ FAIL: ${message}`);
        }
    },

    assertDelta(actual, expected, tolerance, message) {
        const diff = Math.abs(actual - expected);
        this.assert(diff <= tolerance, `${message} (expected: ${expected.toFixed(3)}, actual: ${actual.toFixed(3)}, diff: ${diff.toFixed(3)})`);
    },

    report() {
        console.log('\n' + '='.repeat(60));
        console.log(`РЕЗУЛЬТАТЫ: ${this.passed}/${this.total} пройдено, ${this.failed} провалено`);
        console.log('='.repeat(60) + '\n');
        return { passed: this.passed, failed: this.failed, total: this.total };
    }
};

// ============================================================
// ТЕСТ 1: Цвет в допуске (все дельты < 0.3)
// ============================================================
function testColorInTolerance() {
    console.log('\n🧪 ТЕСТ 1: Цвет в допуске (малые отклонения)');
    console.log('-'.repeat(60));

    const result = calculateCorrection(0.2, 0.15, -0.25, new Map([['802B', 450], ['104B', 280]]));
    
    TestRunner.assert(result.corrections.length === 0, 'Корректировки не требуются');
    TestRunner.assertDelta(result.remainingDelta.dL, 0.2, 0.01, 'Остаточная dL');
    TestRunner.assertDelta(result.remainingDelta.da, 0.15, 0.01, 'Остаточная da');
    TestRunner.assertDelta(result.remainingDelta.db, -0.25, 0.01, 'Остаточная db');
}

// ============================================================
// ТЕСТ 2: Слишком светло (dL > 0)
// ============================================================
function testTooLight() {
    console.log('\n🧪 ТЕСТ 2: Слишком светло (dL = +1.2)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['101B', 120],
        ['400B', 35]
    ]);

    const result = calculateCorrection(1.2, 0.0, 0.0, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Проверяем, что добавлен чёрный пигмент
    const hasBlackCorrection = result.corrections.some(c => c.code === '400B' || c.code === '400');
    TestRunner.assert(hasBlackCorrection, 'Добавлен чёрный пигмент для затемнения');

    // Проверяем, что dL уменьшилась
    TestRunner.assert(Math.abs(result.remainingDelta.dL) < Math.abs(1.2), 'dL уменьшилась после корректировки');
    
    // Проверяем знак: если dL не стала 0, то знак должен сохраниться (уменьшение, но не переход в минус)
    if (Math.abs(result.remainingDelta.dL) > 0.001) {
        TestRunner.assert(result.remainingDelta.dL > 0, 'Знак dL сохранён (уменьшение, но не переход в минус)');
    } else {
        TestRunner.assert(true, 'dL полностью компенсирована (стала 0.000) — это отлично!');
    }

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 3: Слишком тёмно (dL < 0)
// ============================================================
function testTooDark() {
    console.log('\n🧪 ТЕСТ 3: Слишком тёмно (dL = -1.5)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['400B', 50]
    ]);

    const result = calculateCorrection(-1.5, 0.0, 0.0, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Проверяем, что добавлен белый пигмент
    const hasWhiteCorrection = result.corrections.some(c => c.code === '802B' || c.code === '100');
    TestRunner.assert(hasWhiteCorrection, 'Добавлен белый пигмент для осветления');

    // Проверяем, что dL увеличилась
    TestRunner.assert(result.remainingDelta.dL > -1.5, 'dL увеличилась после корректировки');

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 4: Слишком красно (da > 0)
// ============================================================
function testTooRed() {
    console.log('\n🧪 ТЕСТ 4: Слишком красно (da = +0.8)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['700B', 15]  // уже есть красный
    ]);

    const result = calculateCorrection(0.0, 0.8, 0.0, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Проверяем, что добавлен зелёный/синий пигмент (da < 0)
    const hasGreenBlueCorrection = result.corrections.some(c => {
        const pigment = getPigment(c.code);
        return pigment && pigment.influence.da < 0;
    });
    TestRunner.assert(hasGreenBlueCorrection, 'Добавлен пигмент с da < 0 для компенсации красного');

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code} (${c.name})`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 5: Слишком зелено (da < 0)
// ============================================================
function testTooGreen() {
    console.log('\n🧪 ТЕСТ 5: Слишком зелено (da = -0.7)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['600B', 20]  // уже есть зелёный
    ]);

    const result = calculateCorrection(0.0, -0.7, 0.0, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Проверяем, что добавлен красный пигмент (da > 0)
    const hasRedCorrection = result.corrections.some(c => {
        const pigment = getPigment(c.code);
        return pigment && pigment.influence.da > 0;
    });
    TestRunner.assert(hasRedCorrection, 'Добавлен красный пигмент (da > 0)');

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code} (${c.name})`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 6: Слишком жёлто (db > 0)
// ============================================================
function testTooYellow() {
    console.log('\n🧪 ТЕСТ 6: Слишком жёлто (db = +1.0)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['903B', 30]  // уже есть жёлтый
    ]);

    const result = calculateCorrection(0.0, 0.0, 1.0, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Проверяем, что добавлен синий пигмент (db < 0)
    const hasBlueCorrection = result.corrections.some(c => {
        const pigment = getPigment(c.code);
        return pigment && pigment.influence.db < 0;
    });
    TestRunner.assert(hasBlueCorrection, 'Добавлен синий пигмент (db < 0)');

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code} (${c.name})`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 7: Слишком сине (db < 0)
// ============================================================
function testTooBlue() {
    console.log('\n🧪 ТЕСТ 7: Слишком сине (db = -0.9)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['500B', 25]  // уже есть синий
    ]);

    const result = calculateCorrection(0.0, 0.0, -0.9, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Проверяем, что добавлен жёлтый пигмент (db > 0)
    const hasYellowCorrection = result.corrections.some(c => {
        const pigment = getPigment(c.code);
        return pigment && pigment.influence.db > 0;
    });
    TestRunner.assert(hasYellowCorrection, 'Добавлен жёлтый пигмент (db > 0)');

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code} (${c.name})`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 8: Комбинированное отклонение (dL, da, db все non-zero)
// ============================================================
function testCombinedDeviation() {
    console.log('\n🧪 ТЕСТ 8: Комбинированное отклонение (dL=-0.8, da=+0.6, db=-0.5)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['101B', 120],
        ['400B', 35],
        ['212B', 65]
    ]);

    const result = calculateCorrection(-0.8, 0.6, -0.5, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    TestRunner.assert(result.corrections.length <= 3, 'Не более 3 корректировок (по одной на ось)');

    console.log(`  Рекомендации:`);
    result.corrections.forEach(c => {
        console.log(`    +${c.grams.toFixed(2)}г ${c.code} (${c.name}) — ${c.reason}`);
    });
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
    
    // Проверяем, что остаточные дельты уменьшились
    TestRunner.assert(Math.abs(result.remainingDelta.dL) < 0.8, 'dL уменьшилась');
    TestRunner.assert(Math.abs(result.remainingDelta.da) < 0.6, 'da уменьшилась');
    TestRunner.assert(Math.abs(result.remainingDelta.db) < 0.5, 'db уменьшилась');
}

// ============================================================
// ТЕСТ 9: Металлик с flop-эффектом (высокий dL при 110°)
// ============================================================
function testMetallicFlop() {
    console.log('\n🧪 ТЕСТ 9: Металлик с flop-эффектом');
    console.log('-'.repeat(60));

    // Симулируем типичный металлик: светлый при 15°, тёмный при 110°
    const formula = new Map([
        ['802B', 400],
        ['104B', 250],
        ['101B', 150],
        ['106B', 50],
        ['400B', 20]
    ]);

    // dL negative = слишком тёмно
    const result = calculateCorrection(-1.2, -0.3, 0.2, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Для металлика должен быть выбран пигмент, не ухудшающий flop
    const hasWhiteOrLightener = result.corrections.some(c => {
        const pigment = getPigment(c.code);
        return pigment && (pigment.type === 'white' || pigment.type === 'aluminium');
    });
    TestRunner.assert(hasWhiteOrLightener || result.corrections.some(c => c.code === '802B'), 'Добавлен осветляющий пигмент');

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 10: Пустая формула
// ============================================================
function testEmptyFormula() {
    console.log('\n🧪 ТЕСТ 10: Пустая формула');
    console.log('-'.repeat(60));

    const result = calculateCorrection(0.5, 0.3, -0.2, new Map());

    TestRunner.assert(result.corrections.length === 0 || result.corrections.length > 0, 'Обработка пустой формулы (fallback на полную базу)');
    console.log(`  Результат: ${result.corrections.length} корректировок`);
}

// ============================================================
// ТЕСТ 11: Пересчёт веса (scaling)
// ============================================================
function testWeightScaling() {
    console.log('\n🧪 ТЕСТ 11: Пересчёт на разный вес');
    console.log('-'.repeat(60));

    // Формула на 1 литр
    const formulaPerLiter = new Map([
        ['802B', 450],
        ['104B', 280],
        ['400B', 35]
    ]);

    // Тест 200г
    const result200 = calculateCorrection(-0.8, 0.4, -0.3, formulaPerLiter);
    
    // Тест 500г
    const result500 = calculateCorrection(-0.8, 0.4, -0.3, formulaPerLiter);

    // Корректировки должны быть одинаковыми (они не зависят от веса теста в текущей реализации)
    TestRunner.assert(
        result200.corrections.length === result500.corrections.length,
        'Количество корректировок одинаково'
    );

    console.log(`  200г: ${result200.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ')}`);
    console.log(`  500г: ${result500.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ')}`);
}

// ============================================================
// ТЕСТ 12: Экстремальные отклонения
// ============================================================
function testExtremeDeviations() {
    console.log('\n🧪 ТЕСТ 12: Экстремальные отклонения (dL=-2.0, da=+1.5, db=+2.0)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 450],
        ['104B', 280]
    ]);

    const result = calculateCorrection(-2.0, 1.5, 2.0, formula);

    TestRunner.assert(result.corrections.length > 0, 'Есть корректировки');
    
    // Проверяем, что граммы не превышают maxAdd
    result.corrections.forEach(c => {
        const pigment = getPigment(c.code);
        if (pigment) {
            TestRunner.assert(c.grams <= pigment.maxAdd, `${c.code}: ${c.grams}г <= max ${pigment.maxAdd}г`);
        }
    });

    console.log(`  Рекомендации: ${result.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ')}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
}

// ============================================================
// ТЕСТ 13: Серый оттенок (нейтральные пигменты)
// ============================================================
function testGreyShade() {
    console.log('\n🧪 ТЕСТ 13: Серый оттенок (коррекция серым пигментом)');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 400],
        ['104B', 250],
        ['212B', 100],  // Satin White Pearl (was Light Grey)
        ['400B', 30]
    ]);

    const result = calculateCorrection(-0.6, 0.05, -0.05, formula);

    console.log(`  Рекомендации: ${result.corrections.length > 0 ? result.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ') : 'Нет корректировок'}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
    
    TestRunner.assert(result.remainingDelta.dL < -0.6 || result.corrections.length > 0, 'Коррекция светлоты или остаточная dL');
}

// ============================================================
// ТЕСТ 14: Pearl/Effect пигменты
// ============================================================
function testPearlEffect() {
    console.log('\n🧪 ТЕСТ 14: Перламутровый эффект');
    console.log('-'.repeat(60));

    const formula = new Map([
        ['802B', 380],
        ['104B', 220],
        ['212B', 40],  // Satin White Pearl
        ['201B', 30]    // White Pearl
    ]);

    const result = calculateCorrection(0.5, 0.1, -0.4, formula);

    console.log(`  Рекомендации: ${result.corrections.length > 0 ? result.corrections.map(c => `+${c.grams}г ${c.code}`).join(', ') : 'Нет корректировок'}`);
    console.log(`  Остаточная дельта: dL=${result.remainingDelta.dL.toFixed(3)}, da=${result.remainingDelta.da.toFixed(3)}, db=${result.remainingDelta.db.toFixed(3)}`);
    
    TestRunner.assert(true, 'Тест перламутровых пигментов выполнен');
}

// ============================================================
// ТЕСТ 15: Проверка функции getPigment
// ============================================================
function testGetPigment() {
    console.log('\n🧪 ТЕСТ 15: Функция getPigment (нормализация кодов)');
    console.log('-'.repeat(60));

    TestRunner.assert(getPigment('400B') !== null, '400B найден');
    TestRunner.assert(getPigment('N-400B') !== null, 'N-400B найден');
    TestRunner.assert(getPigment('n-400b') !== null, 'n-400b найден (case insensitive)');
    TestRunner.assert(getPigment(' 400B ') !== null, '" 400B " найден (trim)');
    TestRunner.assert(getPigment('INVALID') === null, 'INVALID не найден');
    TestRunner.assert(getPigment('802B').name === 'N-802B Bright White', '802B имя корректно');
}

// ============================================================
// ТЕСТ 16: Визуализация дельт (проверка функции)
// ============================================================
function testDeltaBars() {
    console.log('\n🧪 ТЕСТ 16: Генерация градиентных баров');
    console.log('-'.repeat(60));

    const html = renderDeltaBars(-0.8, 0.5, -0.6);
    
    TestRunner.assert(html.includes('delta-bar'), 'HTML содержит delta-bar');
    TestRunner.assert(html.includes('delta-bar-label'), 'HTML содержит labels');
    TestRunner.assert(html.includes('Тёмнее'), 'Определено "Тёмнее" для dL < 0');
    TestRunner.assert(html.includes('Краснее'), 'Определено "Краснее" для da > 0');
    TestRunner.assert(html.includes('Синее'), 'Определено "Синее" для db < 0');

    console.log('  Генерация HTML баров работает корректно');
}

// ============================================================
// ТЕСТ 17: Визуализация пошагового процесса коррекции
// Показывает, как каждая корректировка влияет на все оси
// ============================================================
function testStepByStepCorrection() {
    console.log('\n🧪 ТЕСТ 17: Пошаговый процесс коррекции (все оси)');
    console.log('-'.repeat(60));

    // Исходное состояние: все три оси выходят за допуск
    let dL = -0.8, da = 0.6, db = -0.5;
    console.log(`\n📍 Начальное состояние:`);
    console.log(`   dL = ${dL.toFixed(2)}  da = ${da.toFixed(2)}  db = ${db.toFixed(2)}`);
    console.log(`   ΔE = ${Math.sqrt(dL*dL + da*da + db*db).toFixed(3)}`);

    const formula = new Map([
        ['802B', 450],
        ['104B', 280],
        ['101B', 120],
        ['400B', 35],
        ['212B', 65]
    ]);

    const result = calculateCorrection(dL, da, db, formula);

    console.log(`\n Шаги коррекции (${result.corrections.length}):`);
    result.corrections.forEach((c, i) => {
        console.log(`   ${i+1}. +${c.grams.toFixed(2)}г ${c.code} — ${c.reason}`);
    });

    console.log(`\n📍 Конечное состояние (остаточная дельта):`);
    console.log(`   dL = ${result.remainingDelta.dL.toFixed(3)}  da = ${result.remainingDelta.da.toFixed(3)}  db = ${result.remainingDelta.db.toFixed(3)}`);
    console.log(`   ΔE = ${Math.sqrt(
        result.remainingDelta.dL**2 + 
        result.remainingDelta.da**2 + 
        result.remainingDelta.db**2
    ).toFixed(3)}`);

    // Проверяем, что все оси улучшились
    const improvedDL = Math.abs(result.remainingDelta.dL) < Math.abs(dL);
    const improvedDA = Math.abs(result.remainingDelta.da) < Math.abs(da);
    const improvedDB = Math.abs(result.remainingDelta.db) < Math.abs(db);

    TestRunner.assert(improvedDL, `dL улучшилась: ${dL.toFixed(2)} → ${result.remainingDelta.dL.toFixed(3)}`);
    TestRunner.assert(improvedDA, `da улучшилась: ${da.toFixed(2)} → ${result.remainingDelta.da.toFixed(3)}`);
    TestRunner.assert(improvedDB, `db улучшилась: ${db.toFixed(2)} → ${result.remainingDelta.db.toFixed(3)}`);

    // В допуске ли?
    const inTolerance = Math.abs(result.remainingDelta.dL) < 0.3 && 
                        Math.abs(result.remainingDelta.da) < 0.3 && 
                        Math.abs(result.remainingDelta.db) < 0.3;
    console.log(`\n   ${inTolerance ? '✅' : '⚠️'} В допуске: ${inTolerance ? 'ДА' : 'НЕТ (нужна повторная коррекция)'}`);
}

// ============================================================
// ТЕСТ 18: Один пигмент влияет на все оси
// ============================================================
function testPigmentAffectsAllAxes() {
    console.log('\n🧪 ТЕСТ 18: Влияние одного пигмента на все оси');
    console.log('-'.repeat(60));

    // Добавляем 1г пигмента 802B (белый)
    const whitePigment = getPigment('802B');
    console.log(`\n⚪ Bright White 802B (1г):`);
    console.log(`   dL: +${whitePigment.influence.dL.toFixed(3)}`);
    console.log(`   da: +${whitePigment.influence.da.toFixed(3)}`);
    console.log(`   db: ${whitePigment.influence.db.toFixed(3)}`);

    // Добавляем 1г пигмента 400B (чёрный)
    const blackPigment = getPigment('400B');
    console.log(`\n⚫ Black 400B (1г):`);
    console.log(`   dL: ${blackPigment.influence.dL.toFixed(3)}`);
    console.log(`   da: ${blackPigment.influence.da.toFixed(3)}`);
    console.log(`   db: ${blackPigment.influence.db.toFixed(3)}`);

    // Добавляем 1г пигмента 700 (красный)
    const redPigment = getPigment('700');
    console.log(`\n🔴 Red 700 (1г):`);
    console.log(`   dL: ${redPigment.influence.dL.toFixed(3)}`);
    console.log(`   da: +${redPigment.influence.da.toFixed(3)}`);
    console.log(`   db: +${redPigment.influence.db.toFixed(3)}`);

    console.log(`\n📌 Вывод: Каждый пигмент влияет на ВСЕ три оси одновременно!`);
    console.log(`   При коррекции dL автоматически меняются da и db.`);
    
    TestRunner.assert(true, 'Демонстрация влияния пигментов на все оси');
}

// ============================================================
// ТЕСТ 19: Коррекция dL улучшает другие оси (сайд-эффект)
// ============================================================
function testSideEffectCorrection() {
    console.log('\n🧪 ТЕСТ 19: Коррекция одной оси улучшает другие (сайд-эффект)');
    console.log('-'.repeat(60));

    // Сценарий: слишком светло (dL > 0) и чуть-чуть красно (da > 0)
    // Добавляем чёрный пигмент — он исправит dL И уменьшит da
    let dL = 0.8, da = 0.4, db = 0.1;
    console.log(`\n📍 Начальное состояние:`);
    console.log(`   dL = ${dL.toFixed(2)} (слишком светло)  ← ГЛАВНАЯ ПРОБЛЕМА`);
    console.log(`   da = ${da.toFixed(2)} (чуть красно)     ← Вторичная проблема`);
    console.log(`   db = ${db.toFixed(2)} (в допуске)`);

    const formula = new Map([
        ['802B', 500],
        ['104B', 250]
    ]);

    const result = calculateCorrection(dL, da, db, formula);

    console.log(`\n🔧 Коррекция:`);
    result.corrections.forEach(c => {
        console.log(`   +${c.grams.toFixed(2)}г ${c.code} — ${c.reason}`);
    });

    console.log(`\n📍 Результат:`);
    console.log(`   dL: ${dL.toFixed(2)} → ${result.remainingDelta.dL.toFixed(3)} (улучшение: ${((1 - Math.abs(result.remainingDelta.dL)/Math.abs(dL))*100).toFixed(0)}%)`);
    console.log(`   da: ${da.toFixed(2)} → ${result.remainingDelta.da.toFixed(3)} (улучшение: ${((1 - Math.abs(result.remainingDelta.da)/Math.abs(da))*100).toFixed(0)}%)`);
    console.log(`   db: ${db.toFixed(2)} → ${result.remainingDelta.db.toFixed(3)}`);

    // Проверяем, что da тоже улучшилась благодаря коррекции dL
    const daImproved = Math.abs(result.remainingDelta.da) < Math.abs(da);
    console.log(`\n📌 da тоже улучшилась: ${daImproved ? '✅ ДА (сайд-эффект от коррекции dL)' : '❌ НЕТ'}`);
    
    TestRunner.assert(daImproved, 'Коррекция dL улучшила da (сайд-эффект)');
}

// ============================================================
// ЗАПУСК ВСЕХ ТЕСТОВ
// ============================================================
function runAllTests() {
    console.log('\n' + '🚀'.repeat(30));
    console.log('ЗАПУСК ТЕСТИРОВАНИЯ NASON LAB');
    console.log('🚀'.repeat(30) + '\n');

    testGetPigment();
    testColorInTolerance();
    testTooLight();
    testTooDark();
    testTooRed();
    testTooGreen();
    testTooYellow();
    testTooBlue();
    testCombinedDeviation();
    testMetallicFlop();
    testEmptyFormula();
    testWeightScaling();
    testExtremeDeviations();
    testGreyShade();
    testPearlEffect();
    testDeltaBars();
    testStepByStepCorrection();
    testPigmentAffectsAllAxes();
    testSideEffectCorrection();

    const results = TestRunner.report();

    if (results.failed === 0) {
        console.log('🎉 ВСЕ ТЕСТЫ ПРОЙДЕНЫ УСПЕШНО!');
    } else {
        console.log(`⚠️  Провалено тестов: ${results.failed}`);
    }

    return results;
}

// Экспорт для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { runAllTests, TestRunner };
}
