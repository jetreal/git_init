/* ============================================
   Nason Lab v5.1 — Логика приложения
   ============================================ */

// ============================================================
// БАЗА ПИГМЕНТОВ NASON BASECOAT TINT SYSTEM
// Реальные коды N-XXXB из российского каталога Axalta Nason (Европа/Россия)
// Источник: Tehnoprok-Avto.ru / Detroit Kuwait TDS
// Влияние (influence) указано для 1 грамма в 200 г теста — ТРЕБУЕТ КАЛИБРОВКИ!
// Полная база: 68 пигментов из реального каталога
// Отдельный файл-копия базы: nason-pigments.json
// ============================================================
const NASON_PIGMENTS = {

    // ==================== АДДИТИВЫ (серия N-0xxA) ====================
    '001A': { name: 'N-001A Flop Control Additive', type: 'additive', influence: { dL: 0.00, da: 0.00, db: 0.00 }, maxAdd: 100 },
    '002A': { name: 'N-002A Viscosity Control Additive', type: 'additive', influence: { dL: 0.00, da: 0.00, db: 0.00 }, maxAdd: 100 },

    // ==================== АЛЮМИНИЕВЫЕ ПИГМЕНТЫ (серия N-1xxB) ====================
    '100B': { name: 'N-100B Fine Bright Alu', type: 'aluminium', influence: { dL: 0.32, da: 0.00, db: 0.01 }, maxAdd: 35 },
    '101B': { name: 'N-101B Fine Alu', type: 'aluminium', influence: { dL: 0.25, da: -0.02, db: 0.03 }, maxAdd: 30 },
    '102B': { name: 'N-102B Coarse Bright Alu', type: 'aluminium', influence: { dL: 0.20, da: -0.01, db: 0.04 }, maxAdd: 25 },
    '103B': { name: 'N-103B Medium Coarse Alu', type: 'aluminium', influence: { dL: 0.22, da: -0.03, db: 0.04 }, maxAdd: 28 },
    '104B': { name: 'N-104B Coarse Alu', type: 'aluminium', influence: { dL: 0.18, da: -0.02, db: 0.05 }, maxAdd: 25 },
    '105B': { name: 'N-105B Very Fine Alu', type: 'aluminium', influence: { dL: 0.28, da: -0.01, db: 0.02 }, maxAdd: 30 },
    '106B': { name: 'N-106B Effect Alu', type: 'aluminium', influence: { dL: 0.30, da: -0.01, db: 0.06 }, maxAdd: 20 },
    '107B': { name: 'N-107B Very Coarse Alu', type: 'aluminium', influence: { dL: 0.12, da: -0.05, db: 0.08 }, maxAdd: 18 },
    '108B': { name: 'N-108B Gold Alu', type: 'aluminium', influence: { dL: 0.15, da: 0.05, db: 0.10 }, maxAdd: 20 },
    '109B': { name: 'N-109B Extra Coarse Alu', type: 'aluminium', influence: { dL: 0.10, da: -0.06, db: 0.09 }, maxAdd: 15 },
    '110B': { name: 'N-110B Orange Aluminium', type: 'aluminium', influence: { dL: 0.18, da: 0.10, db: 0.15 }, maxAdd: 18 },
    '111B': { name: 'N-111B Medium Fine Bright Alu', type: 'aluminium', influence: { dL: 0.26, da: -0.01, db: 0.03 }, maxAdd: 28 },
    '112B': { name: 'N-112B Extra Fine Bright Alu', type: 'aluminium', influence: { dL: 0.35, da: 0.01, db: 0.01 }, maxAdd: 35 },
    '113B': { name: 'N-113B Special Fine Alu', type: 'aluminium', influence: { dL: 0.23, da: -0.02, db: 0.02 }, maxAdd: 25 },

    // ==================== КСИРАЛЛИКОВЫЕ ЭФФЕКТЫ (серия N-3xxB) ====================
    '300B': { name: 'N-300B White Xirallic', type: 'xirallic', influence: { dL: 0.10, da: 0.00, db: 0.05 }, maxAdd: 10 },
    '301B': { name: 'N-301B Red Xirallic', type: 'xirallic', influence: { dL: -0.10, da: 0.40, db: 0.15 }, maxAdd: 5 },
    '302B': { name: 'N-302B Blue Xirallic', type: 'xirallic', influence: { dL: -0.30, da: -0.15, db: -0.55 }, maxAdd: 6 },
    '303B': { name: 'N-303B Gold Xirallic', type: 'xirallic', influence: { dL: 0.05, da: 0.15, db: 0.45 }, maxAdd: 8 },
    '304B': { name: 'N-304B Green Xirallic', type: 'xirallic', influence: { dL: -0.20, da: -0.25, db: 0.35 }, maxAdd: 6 },
    '305B': { name: 'N-305B Copper Xirallic', type: 'xirallic', influence: { dL: -0.05, da: 0.30, db: 0.35 }, maxAdd: 6 },

    // ==================== ПЕРЛАМУТРОВЫЕ ПИГМЕНТЫ (серия N-2xxB) ====================
    '200B': { name: 'N-200B Blue Pearl', type: 'pearl', influence: { dL: -0.10, da: -0.08, db: -0.30 }, maxAdd: 10 },
    '201B': { name: 'N-201B White Pearl', type: 'pearl', influence: { dL: 0.35, da: 0.02, db: -0.05 }, maxAdd: 15 },
    '202B': { name: 'N-202B Gold Pearl', type: 'pearl', influence: { dL: 0.05, da: 0.12, db: 0.40 }, maxAdd: 10 },
    '203B': { name: 'N-203B Green Pearl', type: 'pearl', influence: { dL: -0.05, da: -0.15, db: 0.25 }, maxAdd: 8 },
    '204B': { name: 'N-204B Purple Pearl', type: 'pearl', influence: { dL: -0.15, da: 0.10, db: -0.25 }, maxAdd: 7 },
    '205B': { name: 'N-205B Red Pearl', type: 'pearl', influence: { dL: -0.08, da: 0.35, db: 0.10 }, maxAdd: 8 },
    '207B': { name: 'N-207B Pink Pearl', type: 'pearl', influence: { dL: 0.05, da: 0.30, db: 0.05 }, maxAdd: 7 },
    '209B': { name: 'N-209B Brown Pearl', type: 'pearl', influence: { dL: -0.15, da: 0.15, db: 0.20 }, maxAdd: 8 },
    '210B': { name: 'N-210B Light Blue Pearl', type: 'pearl', influence: { dL: 0.05, da: -0.05, db: -0.25 }, maxAdd: 10 },
    '212B': { name: 'N-212B Satin White Pearl', type: 'pearl', influence: { dL: 0.40, da: 0.02, db: -0.03 }, maxAdd: 20 },

    // ==================== ЧЁРНЫЕ ПИГМЕНТЫ (серия N-4xxB) ====================
    '400B': { name: 'N-400B Black', type: 'black', influence: { dL: -0.75, da: -0.06, db: -0.12 }, maxAdd: 8 },
    '401B': { name: 'N-401B Standard Black', type: 'black', influence: { dL: -0.70, da: -0.05, db: -0.10 }, maxAdd: 8 },
    '402B': { name: 'N-402B Bright Black', type: 'black', influence: { dL: -0.65, da: -0.04, db: -0.08 }, maxAdd: 8 },
    '403B': { name: 'N-403B Deep Black', type: 'black', influence: { dL: -0.85, da: -0.08, db: -0.15 }, maxAdd: 6 },

    // ==================== СИНИЕ/ФИОЛЕТОВЫЕ ПИГМЕНТЫ (серия N-5xxB) ====================
    '500B': { name: 'N-500B Blue', type: 'blue', influence: { dL: -0.38, da: -0.12, db: -0.48 }, maxAdd: 8 },
    '501B': { name: 'N-501B Dark Blue', type: 'blue', influence: { dL: -0.40, da: -0.18, db: -0.55 }, maxAdd: 6 },
    '502B': { name: 'N-502B Purplish Blue', type: 'blue', influence: { dL: -0.42, da: -0.10, db: -0.52 }, maxAdd: 7 },
    '503B': { name: 'N-503B Dark Purple', type: 'violet', influence: { dL: -0.38, da: 0.20, db: -0.30 }, maxAdd: 7 },
    '504B': { name: 'N-504B Deep Blue', type: 'blue', influence: { dL: -0.48, da: -0.14, db: -0.45 }, maxAdd: 6 },
    '505B': { name: 'N-505B Transparent Purple', type: 'violet', influence: { dL: -0.35, da: 0.15, db: -0.35 }, maxAdd: 8 },
    '506B': { name: 'N-506B Transparent Blue', type: 'blue', influence: { dL: -0.30, da: -0.08, db: -0.42 }, maxAdd: 10 },

    // ==================== ЗЕЛЁНЫЕ ПИГМЕНТЫ (серия N-6xxB) ====================
    '600B': { name: 'N-600B Green', type: 'green', influence: { dL: -0.25, da: -0.35, db: 0.20 }, maxAdd: 10 },
    '601B': { name: 'N-601B Deep Green', type: 'green', influence: { dL: -0.35, da: -0.40, db: 0.15 }, maxAdd: 8 },
    '602B': { name: 'N-602B Yellowish Green', type: 'green', influence: { dL: -0.15, da: -0.20, db: 0.35 }, maxAdd: 12 },

    // ==================== КРАСНЫЕ ПИГМЕНТЫ (серия N-7xxB) ====================
    '700B': { name: 'N-700B Red', type: 'red', influence: { dL: -0.25, da: 0.50, db: 0.20 }, maxAdd: 10 },
    '701B': { name: 'N-701B Deep Brownish Red', type: 'red', influence: { dL: -0.30, da: 0.40, db: 0.25 }, maxAdd: 15 },
    '702B': { name: 'N-702B Dark Bright Red', type: 'red', influence: { dL: -0.28, da: 0.55, db: 0.22 }, maxAdd: 10 },
    '703B': { name: 'N-703B Dark Red', type: 'red', influence: { dL: -0.35, da: 0.45, db: 0.18 }, maxAdd: 12 },
    '704B': { name: 'N-704B Dark Brownish Red', type: 'brown', influence: { dL: -0.30, da: 0.20, db: 0.25 }, maxAdd: 15 },
    '705B': { name: 'N-705B Red Oxide', type: 'red', influence: { dL: -0.32, da: 0.38, db: 0.28 }, maxAdd: 15 },
    '706B': { name: 'N-706B Purplish Red', type: 'red', influence: { dL: -0.38, da: 0.30, db: -0.10 }, maxAdd: 10 },
    '707B': { name: 'N-707B Deep Red', type: 'red', influence: { dL: -0.40, da: 0.55, db: 0.15 }, maxAdd: 8 },
    '708B': { name: 'N-708B Bright Red', type: 'red', influence: { dL: -0.20, da: 0.60, db: 0.30 }, maxAdd: 8 },
    '709B': { name: 'N-709B Brilliant Red', type: 'red', influence: { dL: -0.22, da: 0.58, db: 0.28 }, maxAdd: 8 },
    '710B': { name: 'N-710B Maroon Red', type: 'red', influence: { dL: -0.40, da: 0.45, db: 0.10 }, maxAdd: 7 },
    '711B': { name: 'N-711B Pure Purplish Red', type: 'red', influence: { dL: -0.35, da: 0.35, db: -0.15 }, maxAdd: 7 },

    // ==================== БЕЛЫЕ ПИГМЕНТЫ (серия N-8xxB) ====================
    '800B': { name: 'N-800B White', type: 'white', influence: { dL: 0.55, da: 0.01, db: -0.02 }, maxAdd: 50 },
    '801B': { name: 'N-801B Pure White', type: 'white', influence: { dL: 0.58, da: 0.00, db: -0.01 }, maxAdd: 50 },
    '802B': { name: 'N-802B Bright White', type: 'white', influence: { dL: 0.70, da: 0.02, db: -0.01 }, maxAdd: 55 },
    '803B': { name: 'N-803B White HS', type: 'white', influence: { dL: 0.52, da: 0.01, db: 0.00 }, maxAdd: 50 },

    // ==================== ЖЁЛТЫЕ ПИГМЕНТЫ (серия N-9xxB) ====================
    '900B': { name: 'N-900B Deep Yellow', type: 'yellow', influence: { dL: 0.02, da: 0.10, db: 0.55 }, maxAdd: 12 },
    '901B': { name: 'N-901B Bright Yellow', type: 'yellow', influence: { dL: 0.10, da: 0.08, db: 0.65 }, maxAdd: 12 },
    '902B': { name: 'N-902B Dark Yellow', type: 'yellow', influence: { dL: -0.05, da: 0.12, db: 0.50 }, maxAdd: 12 },
    '903B': { name: 'N-903B Yellow', type: 'yellow', influence: { dL: 0.05, da: 0.05, db: 0.55 }, maxAdd: 15 },

    // ==================== ОРАНЖЕВЫЕ ПИГМЕНТЫ (серия N-95xB) ====================
    '950B': { name: 'N-950B Orange', type: 'orange', influence: { dL: -0.05, da: 0.35, db: 0.55 }, maxAdd: 10 },
    '951B': { name: 'N-951B Dark Orange', type: 'orange', influence: { dL: -0.08, da: 0.40, db: 0.50 }, maxAdd: 9 },
    '952B': { name: 'N-952B Deep Orange', type: 'orange', influence: { dL: -0.12, da: 0.45, db: 0.48 }, maxAdd: 8 },
    '953B': { name: 'N-953B Reddish Orange', type: 'orange', influence: { dL: -0.15, da: 0.50, db: 0.40 }, maxAdd: 8 },
    '954B': { name: 'N-954B Copper', type: 'orange', influence: { dL: -0.10, da: 0.25, db: 0.45 }, maxAdd: 10 },
    '955B': { name: 'N-955B Bright Orange', type: 'orange', influence: { dL: -0.03, da: 0.38, db: 0.58 }, maxAdd: 9 },
};

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================
const CAL_KEY = 'nason-calibrated-vectors';

function getCalibratedVectors() {
    try {
        return JSON.parse(localStorage.getItem(CAL_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function getPigment(code) {
    // Нормализация кода: убираем "N-", "n-", пробелы
    code = code.trim().toUpperCase().replace(/^N-?/, '');
    const base = NASON_PIGMENTS[code] || null;
    if (!base) return null;

    // Проверяем, есть ли откалиброванный вектор
    const calibrated = getCalibratedVectors();
    if (calibrated[code]) {
        return {
            ...base,
            influence: {
                dL: calibrated[code].dL,
                da: calibrated[code].da,
                db: calibrated[code].db
            },
            calibrated: true
        };
    }
    return { ...base, calibrated: false };
}

function getAverageDelta(prefix) {
    // Взвешенное среднее: 45° самый важный, 15° и 110° для металликов
    const w15 = 0.3, w45 = 0.4, w110 = 0.3;
    const v15 = parseFloat(document.getElementById(prefix + '15').value) || 0;
    const v45 = parseFloat(document.getElementById(prefix + '45').value) || 0;
    const v110 = parseFloat(document.getElementById(prefix + '110').value) || 0;
    return v15 * w15 + v45 * w45 + v110 * w110;
}

function addRow() {
    const div = document.createElement('div');
    div.className = 'formula-row';
    div.innerHTML = '<span class="label-code">Код:</span><div class="code-wrapper"><input type="text" class="c-code" placeholder="N-400B" oninput="showPigmentName(this)" onkeypress="return handleCodeEnter(event)"><span class="pigment-label"></span></div><span class="label-gram">Грам:</span><input type="number" class="c-val" placeholder="0.0" min="0" step="0.01" oninput="validateGrams(this)" onblur="formatGrams(this)" onkeypress="if(event.keyCode===13){this.blur();return false;} return /[0-9.\\-]/.test(String.fromCharCode(event.keyCode))">';
    document.getElementById('formulaInputs').appendChild(div);
}

// ============================================================
// ОТОБРАЖЕНИЕ НАЗВАНИЯ ПИГМЕНТА + ВАЛИДАЦИЯ В РЕАЛЬНОМ ВРЕМЕНИ
// ============================================================
function showPigmentName(inputEl) {
    const row = inputEl.closest('.formula-row');
    const label = row.querySelector('.pigment-label');
    let code = inputEl.value.trim();

    // Автозамена кириллических «близнецов» на латиницу (для русской раскладки)
    // Н→H, А→A, В→B, С→C, Е→E, К→K, М→M, О→O, Р→P, Т→T, Х→X
    const cyrillicMap = {
        'Н': 'H', 'А': 'A', 'В': 'B', 'С': 'C', 'Е': 'E',
        'К': 'K', 'М': 'M', 'О': 'O', 'Р': 'P', 'Т': 'T', 'Х': 'X',
        'н': 'h', 'а': 'a', 'в': 'b', 'с': 'c', 'е': 'e',
        'к': 'k', 'м': 'm', 'о': 'o', 'р': 'p', 'т': 't', 'х': 'x'
    };
    code = code.replace(/[НАВСЕКМОРТХнавсекмортх]/g, c => cyrillicMap[c] || c);

    // Оставляем только латиницу, цифры и дефис
    code = code.replace(/[^a-zA-Z0-9\-]/g, '');
    if (code !== inputEl.value.trim()) {
        inputEl.value = code;
    }

    if (!code) {
        label.textContent = '';
        label.style.color = '#666';
        inputEl.classList.remove('input-error');
        return;
    }

    const pigment = getPigment(code);
    if (pigment) {
        const calBadge = pigment.calibrated ? ' ✅' : '';
        label.textContent = pigment.name + calBadge;
        label.style.color = pigment.calibrated ? '#2e7d32' : '#666';
        inputEl.classList.remove('input-error');
    } else {
        label.textContent = '⚠ не найден';
        label.style.color = '#dc3545';
        inputEl.classList.add('input-error');
    }
}

// Валидация кода при потере фокуса: Enter→blur
function handleCodeEnter(event) {
    if (event.keyCode === 13) {
        event.target.blur();
        return false;
    }
    return true;
}

// Валидация граммов: запрет отрицательных значений + запрет букв + удаление ведущих нулей
function validateGrams(inputEl) {
    let raw = inputEl.value.trim();

    // Разрешаем пустое поле и частичный ввод
    if (raw === '' || raw === '.' || raw === '-' || raw === '0.' || raw === '-0.') {
        inputEl.classList.remove('input-error');
        return;
    }

    // Запрет букв: оставляем только цифры, точку, минус
    raw = raw.replace(/[^0-9.\-]/g, '');
    if (raw !== inputEl.value.trim()) {
        inputEl.value = raw;
    }

    // Удаляем ведущие нули у целых чисел: "05" → "5", "007" → "7"
    // Но сохраняем "0.5", "0.", "-0."
    const isDecimal = raw.includes('.');
    const isNegative = raw.startsWith('-');
    let numPart = isNegative ? raw.slice(1) : raw;

    if (!isDecimal && numPart.length > 1 && numPart.startsWith('0')) {
        numPart = numPart.replace(/^0+/, '') || '0';
        raw = (isNegative ? '-' : '') + numPart;
        inputEl.value = raw;
    }

    // Парсим
    const val = parseFloat(raw);
    if (isNaN(val)) {
        inputEl.value = 0;
        inputEl.classList.add('input-error');
        return;
    }

    if (val < 0) {
        inputEl.value = 0;
        inputEl.classList.add('input-error');
        return;
    }

    inputEl.classList.remove('input-error');
}

// Форматирование при потере фокуса: убрать trailing точку, нули после точки
function formatGrams(inputEl) {
    let raw = inputEl.value.trim();
    if (raw === '' || raw === '.' || raw === '-' || raw === '-.') {
        inputEl.value = 0;
        inputEl.classList.remove('input-error');
        return;
    }

    let val = parseFloat(raw);
    if (isNaN(val) || val < 0) {
        inputEl.value = 0;
        inputEl.classList.add('input-error');
        return;
    }

    // Округляем до 2 знаков, убираем лишние нули: 12.50 → 12.5, 5.00 → 5
    inputEl.value = parseFloat(val.toFixed(2));
    inputEl.classList.remove('input-error');
}

// ============================================================
// ВАЛИДАЦИЯ ДЕЛЬТ (dL, da, db)
// Запрет букв, удаление ведущих нулей, Enter→blur
// ============================================================
function validateDelta(inputEl) {
    let raw = inputEl.value.trim();

    // Разрешаем пустое и частичный ввод
    if (raw === '' || raw === '.' || raw === '-' || raw === '-.' || raw === '0.' || raw === '-0.') {
        inputEl.classList.remove('input-error');
        return;
    }

    // Запрет букв
    raw = raw.replace(/[^0-9.\-]/g, '');
    if (raw !== inputEl.value.trim()) {
        inputEl.value = raw;
    }

    // Удаляем ведущие нули у целых
    const isDecimal = raw.includes('.');
    const isNegative = raw.startsWith('-');
    let numPart = isNegative ? raw.slice(1) : raw;

    if (!isDecimal && numPart.length > 1 && numPart.startsWith('0')) {
        numPart = numPart.replace(/^0+/, '') || '0';
        raw = (isNegative ? '-' : '') + numPart;
        inputEl.value = raw;
    }

    const val = parseFloat(raw);
    if (isNaN(val)) {
        inputEl.classList.add('input-error');
    } else {
        inputEl.classList.remove('input-error');
    }
}

// Форматирование дельт при blur: округление до 2 знаков
function formatDelta(inputEl) {
    let raw = inputEl.value.trim();
    if (raw === '' || raw === '.' || raw === '-' || raw === '-.') {
        inputEl.value = '0.00';
        inputEl.classList.remove('input-error');
        return;
    }

    const val = parseFloat(raw);
    if (isNaN(val)) {
        inputEl.value = '0.00';
        inputEl.classList.add('input-error');
        return;
    }

    inputEl.value = val.toFixed(2);
    inputEl.classList.remove('input-error');
}

// Enter→blur для дельт
function handleDeltaEnter(event) {
    if (event.keyCode === 13) {
        event.target.blur();
        return false;
    }
    return true;
}

// ============================================================
// ПЕРЕКЛЮЧЕНИЕ ПАНЕЛИ БЫСТРЫХ ТЕСТОВ
// ============================================================
function toggleQuickTests() {
    const panel = document.getElementById('quickTestsPanel');
    const btn = document.querySelector('.btn-quick-tests-toggle');
    const isHidden = panel.style.display === 'none';
    panel.style.display = isHidden ? 'block' : 'none';
    btn.classList.toggle('expanded', isHidden);
    btn.innerHTML = isHidden ? '🧪 Быстрые тесты ▴' : '🧪 Быстрые тесты ▾';
}

// ============================================================
// АЛГОРИТМ РАСЧЕТА КОРРЕКТИРОВКИ (оптимизационный)
// Итеративная минимизация ΔE с приоритетом правильного направления
// ============================================================
function calculateCorrection(avgDL, avgDA, avgDB, currentFormula, testWeight = 200) {
    const tolerance = 0.15;
    const step = 0.25;
    const maxIter = 400;
    const minImprovement = 0.001;
    const MAX_PIGMENTS = 4;
    const BASE_WEIGHT = 200; // влияние пигментов рассчитано для 200г
    const scale = testWeight / BASE_WEIGHT; // масштабный коэффициент

    const startDeltaE = Math.sqrt(avgDL ** 2 + avgDA ** 2 + avgDB ** 2);

    if (Math.abs(avgDL) <= tolerance && Math.abs(avgDA) <= tolerance && Math.abs(avgDB) <= tolerance) {
        return { corrections: [], message: 'Цвет в допуске', remainingDelta: { dL: avgDL, da: avgDA, db: avgDB } };
    }

    // --- Кандидаты ---
    const candidates = new Map();
    for (const [code, grams] of currentFormula) {
        const p = getPigment(code);
        if (p) candidates.set(code, { ...p, code, inFormula: true });
    }
    for (const [code, p] of Object.entries(NASON_PIGMENTS)) {
        if (!candidates.has(code)) candidates.set(code, { ...p, code, inFormula: false });
    }

    // --- Определяем целевые направления коррекции ---
    // dirDL = -1 если слишком светло (нужно затемнять, dL↓), +1 если тёмно (dL↑)
    const targetDirDL = avgDL > tolerance ? -1 : avgDL < -tolerance ? 1 : 0;
    const targetDirDA = avgDA > tolerance ? -1 : avgDA < -tolerance ? 1 : 0;
    const targetDirDB = avgDB > tolerance ? -1 : avgDB < -tolerance ? 1 : 0;

    let remDL = avgDL, remDA = avgDA, remDB = avgDB;
    let currentDeltaE = startDeltaE;
    let noImprovementCount = 0;
    const maxNoImprovement = 30;

    // stepDetails: трекаем оси на каждом шаге прямо в основном цикле
    const stepDetails = [];

    for (let iter = 0; iter < maxIter; iter++) {
        if (Math.abs(remDL) <= tolerance && Math.abs(remDA) <= tolerance && Math.abs(remDB) <= tolerance) break;

        const curDirDL = remDL > tolerance ? -1 : remDL < -tolerance ? 1 : 0;
        const curDirDA = remDA > tolerance ? -1 : remDA < -tolerance ? 1 : 0;
        const curDirDB = remDB > tolerance ? -1 : remDB < -tolerance ? 1 : 0;

        let bestCandidate = null;
        let bestScore = -Infinity;

        for (const [, cp] of candidates) {
            if (cp.maxAdd < step) continue;
            const dir = 1;
            const ndL = remDL + dir * step * cp.influence.dL;
            const ndA = remDA + dir * step * cp.influence.da;
            const ndB = remDB + dir * step * cp.influence.db;

            const fDL = curDirDL !== 0 && Math.abs(ndL) > Math.abs(remDL);
            const fDA = curDirDA !== 0 && Math.abs(ndA) > Math.abs(remDA);
            const fDB = curDirDB !== 0 && Math.abs(ndB) > Math.abs(remDB);

            // Запрещаем только ухудшение ГЛАВНОЙ оси (самое большое отклонение)
            // Вторичные оси могут ухудшаться — общий ΔE это компенсирует
            const absRemDL = Math.abs(remDL), absRemDA = Math.abs(remDA), absRemDB = Math.abs(remDB);
            const maxViolation = Math.max(absRemDL, absRemDA, absRemDB);
            if (absRemDL >= maxViolation && absRemDL > tolerance && fDL) continue;
            if (absRemDA >= maxViolation && absRemDA > tolerance && fDA) continue;
            if (absRemDB >= maxViolation && absRemDB > tolerance && fDB) continue;

            const nDeltaE = Math.sqrt(ndL ** 2 + ndA ** 2 + ndB ** 2);
            let deltaEImprovement = currentDeltaE - nDeltaE;

            // ШТРАФ за новый пигмент: если этот пигмент ещё не добавлен — вычитаем
            // Это заставляет алгоритм предпочитать уже выбранные пигменты
            const alreadyInStep = stepDetails.some(d => d.code === cp.code);
            if (!alreadyInStep) {
                deltaEImprovement -= 0.02; // небольшой штраф за новый пигмент
            }

            if (deltaEImprovement > bestScore) {
                bestScore = deltaEImprovement;
                bestCandidate = cp;
            }
        }

        if (!bestCandidate || bestScore < minImprovement) {
            noImprovementCount++;
            if (noImprovementCount >= maxNoImprovement) break;
            continue;
        }

        noImprovementCount = 0;

        const axes = [];
        if (curDirDL !== 0) axes.push(curDirDL < 0 ? 'светлота' : 'темнота');
        if (curDirDA !== 0) axes.push(curDirDA < 0 ? 'краснота' : 'зеленота');
        if (curDirDB !== 0) axes.push(curDirDB < 0 ? 'желтизна' : 'синевa');

        remDL += step * bestCandidate.influence.dL;
        remDA += step * bestCandidate.influence.da;
        remDB += step * bestCandidate.influence.db;
        currentDeltaE = Math.sqrt(remDL ** 2 + remDA ** 2 + remDB ** 2);

        stepDetails.push({ code: bestCandidate.code, name: bestCandidate.name, axes });

        // Ранняя остановка если достигнуто MAX_PIGMENTS
        const uniquePigments = new Set(stepDetails.map(d => d.code));
        if (uniquePigments.size >= MAX_PIGMENTS) break;
    }

    // Агрегируем по коду и масштабируем граммы под вес теста
    const aggMap = new Map();
    for (const d of stepDetails) {
        const existing = aggMap.get(d.code);
        if (existing) {
            existing.grams += step * scale;
            for (const ax of d.axes) {
                if (!existing.axes.includes(ax)) existing.axes.push(ax);
            }
        } else {
            aggMap.set(d.code, { code: d.code, name: d.name, grams: step * scale, axes: [...d.axes] });
        }
    }

    const corrections = Array.from(aggMap.values()).map(e => ({
        ...e,
        grams: Math.round(e.grams * 100) / 100,
        reason: `Коррекция: ${e.axes.join(', ')}`,
        action: 'add'
    }));

    corrections.sort((a, b) => b.grams - a.grams);

    const endDeltaE = Math.sqrt(remDL ** 2 + remDA ** 2 + remDB ** 2);
    const improvement = ((1 - endDeltaE / startDeltaE) * 100);

    console.log(`🔬 Оптимизация: ΔE ${startDeltaE.toFixed(3)} → ${endDeltaE.toFixed(3)} (улучшение ${improvement.toFixed(1)}%, ${corrections.length} пигментов)`);
    console.log(`   Целевые направления: dL:${targetDirDL} da:${targetDirDA} db:${targetDirDB}`);
    console.log(`   Остаток: dL=${remDL.toFixed(3)} da=${remDA.toFixed(3)} db=${remDB.toFixed(3)}`);

    return { corrections, remainingDelta: { dL: remDL, da: remDA, db: remDB } };
}

// ============================================================
// ГРАДИЕНТНАЯ ВИЗУАЛИЗАЦИЯ ДЕЛЬТ
// ============================================================
function renderDeltaBars(avgDL, avgDA, avgDB) {
    const maxVal = 2; // максимальное значение шкалы
    let html = '<b>📊 Визуализация отклонений:</b><div class="delta-bar-bg">';

    // dL — светлота: от чёрного (тёмное) к белому (светлое)
    const dlPercent = Math.min(Math.max(((avgDL + maxVal) / (maxVal * 2)) * 100, 2), 98);
    const dlDir = avgDL < 0 ? 'Тёмнее' : avgDL > 0 ? 'Светлее' : 'Норма';
    const dlClass = avgDL < -0.3 ? 'dark' : avgDL > 0.3 ? 'light' : 'ok';
    html += `<div class="delta-bar-container">
        <span class="delta-bar-label">dL</span>
        <div class="delta-bar delta-bar-lightness"><div class="delta-bar-value" style="left:${dlPercent}%">${dlDir} (${avgDL.toFixed(2)})</div></div>
    </div>`;

    // da — красный/зелёный: от зелёного (-a) к красному (+a)
    const daPercent = Math.min(Math.max(((avgDA + maxVal) / (maxVal * 2)) * 100, 2), 98);
    const daDir = avgDA > 0 ? 'Краснее' : avgDA < 0 ? 'Зеленее' : 'Норма';
    const daClass = avgDA > 0.3 ? 'red' : avgDA < -0.3 ? 'green' : 'ok';
    html += `<div class="delta-bar-container">
        <span class="delta-bar-label">da</span>
        <div class="delta-bar delta-bar-redgreen"><div class="delta-bar-value" style="left:${daPercent}%">${daDir} (${avgDA.toFixed(2)})</div></div>
    </div>`;

    // db — жёлтый/синий: от синего (-b) к жёлтому (+b)
    const dbPercent = Math.min(Math.max(((avgDB + maxVal) / (maxVal * 2)) * 100, 2), 98);
    const dbDir = avgDB > 0 ? 'Желтее' : avgDB < 0 ? 'Синее' : 'Норма';
    const dbClass = avgDB > 0.3 ? 'yellow' : avgDB < -0.3 ? 'blue' : 'ok';
    html += `<div class="delta-bar-container">
        <span class="delta-bar-label">db</span>
        <div class="delta-bar delta-bar-yellowblue"><div class="delta-bar-value" style="left:${dbPercent}%">${dbDir} (${avgDB.toFixed(2)})</div></div>
    </div>`;

    html += '</div>';
    return html;
}

// ИСТОРИЯ РАСЧЁТОВ (localStorage)
// ============================================================
const HISTORY_KEY = 'nason_history';
const MAX_HISTORY = 20;

function saveToHistory(data) {
    let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    const entry = {
        date: new Date().toISOString(),
        totalWeight: data.totalWeight,
        avgDL: data.avgDL, avgDA: data.avgDA, avgDB: data.avgDB,
        corrections: data.corrections,
        formula: Array.from(data.formula.entries()),
        remainingDelta: data.remainingDelta
    };
    history.unshift(entry);
    if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    renderHistory();
}

function loadHistory() {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
}

function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById('historyContainer');
    if (!container) return;
    const history = loadHistory();

    if (history.length === 0) {
        container.innerHTML = '<p class="history-empty">История пуста. Нажмите «Анализировать» для сохранения.</p>';
        return;
    }

    let html = `<div style="display:flex;justify-content:space-between;align-items:center;">
        <h4>📜 История расчётов (${history.length})</h4>
        <button class="btn-clear-history" onclick="clearHistory()">Очистить</button>
    </div>`;

    history.forEach((entry, i) => {
        const d = new Date(entry.date);
        const dateStr = d.toLocaleDateString('ru-RU') + ' ' + d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        const corrSummary = entry.corrections.length > 0
            ? entry.corrections.map(c => `+${c.grams.toFixed(1)}г ${c.code}`).join(', ')
            : '✅ В допуске';
        html += `<div class="history-item" onclick="loadHistoryEntry(${i})">
            <div class="history-date">${dateStr}</div>
            <div class="history-summary">dL=${entry.avgDL.toFixed(2)} da=${entry.avgDA.toFixed(2)} db=${entry.avgDB.toFixed(2)} → ${corrSummary}</div>
        </div>`;
    });

    container.innerHTML = html;
}

function loadHistoryEntry(index) {
    const history = loadHistory();
    const entry = history[index];
    if (!entry) return;

    // Заполняем дельты
    // Нужно рассчитать обратные дельты — приблизим по средним
    document.getElementById('l15').value = (entry.avgDL * 1.1).toFixed(2);
    document.getElementById('l45').value = entry.avgDL.toFixed(2);
    document.getElementById('l110').value = (entry.avgDL * 0.9).toFixed(2);
    document.getElementById('a15').value = (entry.avgDA * 1.1).toFixed(2);
    document.getElementById('a45').value = entry.avgDA.toFixed(2);
    document.getElementById('a110').value = (entry.avgDA * 0.9).toFixed(2);
    document.getElementById('b15').value = (entry.avgDB * 1.1).toFixed(2);
    document.getElementById('b45').value = entry.avgDB.toFixed(2);
    document.getElementById('b110').value = (entry.avgDB * 0.9).toFixed(2);

    // Снимаем ошибки валидации с дельт
    document.querySelectorAll('#l15,#l45,#l110,#a15,#a45,#a110,#b15,#b45,#b110').forEach(el => el.classList.remove('input-error'));

    document.getElementById('currentWeight').value = entry.totalWeight;

    // Заполняем формулу
    const formulaDiv = document.getElementById('formulaInputs');
    formulaDiv.innerHTML = '';
    entry.formula.forEach(([code, grams]) => {
        const div = document.createElement('div');
        div.className = 'formula-row';
        div.innerHTML = `<span class="label-code">Код:</span><div class="code-wrapper"><input type="text" class="c-code" value="${code}" placeholder="N-400B" oninput="showPigmentName(this)" onkeypress="return handleCodeEnter(event)"><span class="pigment-label"></span></div><span class="label-gram">Грам:</span><input type="number" class="c-val" value="${grams}" placeholder="0.0" min="0" step="0.01" oninput="validateGrams(this)" onblur="formatGrams(this)" onkeypress="if(event.keyCode===13){this.blur();return false;} return /[0-9.\\-]/.test(String.fromCharCode(event.keyCode))">`;
        formulaDiv.appendChild(div);
    });

    // Показываем названия пигментов
    formulaDiv.querySelectorAll('.c-code').forEach(input => showPigmentName(input));

    // Автоматически рассчитаем
    calculate();
}

// ============================================================
// ГЛАВНАЯ ФУНКЦИЯ РАСЧЕТА
// ============================================================
function calculate() {
    const totalWeight = parseFloat(document.getElementById('currentWeight').value) || 200;
    const codes = document.querySelectorAll('.c-code');
    const vals = document.querySelectorAll('.c-val');

    const avgDL = getAverageDelta('l');
    const avgDA = getAverageDelta('a');
    const avgDB = getAverageDelta('b');

    const currentFormula = new Map();
    let sumGpl = 0;
    for (let i = 0; i < codes.length; i++) {
        const code = codes[i].value.trim();
        const val = parseFloat(vals[i].value) || 0;
        if (code && val > 0) { currentFormula.set(code, val); sumGpl += val; }
    }

    let reportHtml = '';

    if (sumGpl === 0) {
        reportHtml += '<h3>📊 Результат анализа</h3>';
        reportHtml += '<span style="color:var(--red);">⚠️ Ошибка: Введите граммы в формулу!</span>';
    } else {
        reportHtml += '<h3>📊 Результат анализа</h3>';
        // Содержимое стакана
        reportHtml += '<b>🧪 Содержимое стакана (' + totalWeight + ' г):</b><ul>';
        for (const [code, gpl] of currentFormula) {
            const pigment = getPigment(code);
            const inGlass = (gpl / sumGpl) * totalWeight;
            reportHtml += `<li><b>${code}</b> (${pigment ? pigment.name : code}): <b>${inGlass.toFixed(2)} г</b></li>`;
        }
        reportHtml += '</ul><hr>';

        // Градиентная визуализация
        reportHtml += renderDeltaBars(avgDL, avgDA, avgDB);
        reportHtml += '<hr>';

        // Расчёт корректировки
        const correctionResult = calculateCorrection(avgDL, avgDA, avgDB, currentFormula, totalWeight);
        const { corrections, remainingDelta } = correctionResult;

        if (corrections.length === 0) {
            reportHtml += `<div class="report-section report-in-tolerance">`;
            reportHtml += `<b>✅ Корректировка не требуется</b><br>`;
            reportHtml += `Остаточная дельта: dL=${remainingDelta.dL.toFixed(3)}, da=${remainingDelta.da.toFixed(3)}, db=${remainingDelta.db.toFixed(3)}`;
            reportHtml += `</div>`;
        } else {
            reportHtml += `<div class="report-section report-corrections">`;
            reportHtml += `<b>🔧 Рекомендуемая корректировка:</b><br><br>`;

            let totalAdd = 0;
            for (const c of corrections) {
                const p = getPigment(c.code);
                const calBadge = (p && p.calibrated) ? ' <span style="font-size:11px;color:#2e7d32;">✅ замер</span>' : '';
                const influenceInfo = (p && p.calibrated)
                    ? `<div class="reason" style="font-size:11px;color:var(--text-tertiary);">Вектор: dL=${p.influence.dL.toFixed(3)}, da=${p.influence.da.toFixed(3)}, db=${p.influence.db.toFixed(3)}</div>`
                    : '';
                reportHtml += `<div class="correction-card"><span class="grams">+${c.grams.toFixed(2)} г</span> → <span class="pigment-name">${c.code} (${c.name})</span>${calBadge}<div class="reason">${c.reason}</div>${influenceInfo}</div>`;
                totalAdd += c.grams;
            }
            reportHtml += `<hr><b>Итого добавить: ${totalAdd.toFixed(2)} г</b> → Новый вес: ${(totalWeight + totalAdd).toFixed(1)} г`;
            reportHtml += `</div>`;

            // Пересчёт формулы
            reportHtml += `<div class="report-section report-new-formula">`;
            reportHtml += `<b>📋 Новая формула (на ${(totalWeight + totalAdd).toFixed(0)} г):</b><br><br>`;
            for (const [code, gpl] of currentFormula) {
                const p = getPigment(code);
                const inGlass = (gpl / sumGpl) * totalWeight;
                reportHtml += `<div>${code} (${p ? p.name : code}): <b>${inGlass.toFixed(2)} г</b></div>`;
            }
            for (const c of corrections) {
                reportHtml += `<div style="color:#e65100;font-weight:bold;">+ ${c.code} (${c.name}): <b>${c.grams.toFixed(2)} г</b></div>`;
            }
            reportHtml += `<hr><small>Остаточная дельта: dL=${remainingDelta.dL.toFixed(3)}, da=${remainingDelta.da.toFixed(3)}, db=${remainingDelta.db.toFixed(3)}</small>`;
            reportHtml += `</div>`;
        }

        // Детальные дельты по углам
        reportHtml += `<details><summary>📊 Детальные дельты по углам</summary><table>`;
        reportHtml += `<tr><th>Угол</th><th>dL</th><th>da</th><th>db</th><th>ΔE</th></tr>`;
        for (const angle of ['15', '45', '110']) {
            const l = parseFloat(document.getElementById('l' + angle).value) || 0;
            const a = parseFloat(document.getElementById('a' + angle).value) || 0;
            const b = parseFloat(document.getElementById('b' + angle).value) || 0;
            const dE = Math.sqrt(l*l + a*a + b*b);
            const bg = dE > 1 ? ' style="background:#ffebee;"' : '';
            reportHtml += `<tr${bg}><td>${angle}°</td><td>${l.toFixed(2)}</td><td>${a.toFixed(2)}</td><td>${b.toFixed(2)}</td><td>${dE.toFixed(2)}</td></tr>`;
        }
        reportHtml += `</table></details>`;

        // Сохраняем в историю
        const totalAdd = corrections.reduce((s, c) => s + c.grams, 0);
        saveToHistory({ totalWeight, avgDL, avgDA, avgDB, corrections, formula: currentFormula, sumGpl, remainingDelta, totalAdd });
    }

    const reportBox = document.getElementById('report');
    reportBox.innerHTML = reportHtml;
    reportBox.style.display = 'block';
}

// ============================================================
// БЫСТРЫЕ ТЕСТОВЫЕ ПРЕСЕТЫ
// ============================================================
const PRESETS = {
    silver: {
        name: 'Серебристый металлик',
        weight: 200,
        deltas: {
            l15: -0.50, a15: 0.20, b15: -0.15,
            l45: -0.40, a45: 0.15, b45: -0.10,
            l110: -0.60, a110: 0.25, b110: -0.20
        },
        formula: [
            { code: '802B', grams: 400 },
            { code: '104B', grams: 250 },
            { code: '101B', grams: 150 },
            { code: '106B', grams: 50 },
            { code: '400B', grams: 20 }
        ]
    },
    red: {
        name: 'Красный яркий',
        weight: 200,
        deltas: {
            l15: -0.30, a15: 0.80, b15: 0.40,
            l45: -0.25, a45: 0.70, b45: 0.35,
            l110: -0.35, a110: 0.90, b110: 0.45
        },
        formula: [
            { code: '802B', grams: 350 },
            { code: '700', grams: 80 },
            { code: '710B', grams: 40 },
            { code: '903B', grams: 30 },
            { code: '400B', grams: 25 }
        ]
    },
    blue: {
        name: 'Синий глубокий',
        weight: 200,
        deltas: {
            l15: -0.60, a15: -0.10, b15: -0.80,
            l45: -0.50, a45: -0.08, b45: -0.70,
            l110: -0.70, a110: -0.12, b110: -0.90
        },
        formula: [
            { code: '802B', grams: 380 },
            { code: '300', grams: 60 },
            { code: '302B', grams: 35 },
            { code: '400B', grams: 30 },
            { code: '104B', grams: 40 }
        ]
    },
    white_pearl: {
        name: 'Белый перламутр',
        weight: 200,
        deltas: {
            l15: 0.40, a15: 0.05, b15: -0.20,
            l45: 0.35, a45: 0.03, b45: -0.15,
            l110: 0.45, a110: 0.08, b110: -0.25
        },
        formula: [
            { code: '802B', grams: 400 },
            { code: '212B', grams: 50 },
            { code: '410', grams: 40 },
            { code: '104B', grams: 60 }
        ]
    },
    black: {
        name: 'Чёрный глубокий',
        weight: 200,
        deltas: {
            l15: -0.80, a15: -0.05, b15: -0.10,
            l45: -0.70, a45: -0.03, b45: -0.08,
            l110: -0.90, a110: -0.07, b110: -0.12
        },
        formula: [
            { code: '400B', grams: 80 },
            { code: '401', grams: 40 },
            { code: '802B', grams: 500 },
            { code: '104B', grams: 150 }
        ]
    },
    yellow: {
        name: 'Жёлтый лимон',
        weight: 200,
        deltas: {
            l15: 0.30, a15: 0.10, b15: 0.90,
            l45: 0.25, a45: 0.08, b45: 0.80,
            l110: 0.35, a110: 0.12, b110: 1.00
        },
        formula: [
            { code: '802B', grams: 380 },
            { code: '904', grams: 70 },
            { code: '903B', grams: 40 },
            { code: '104B', grams: 60 }
        ]
    },
    green: {
        name: 'Зелёный изумруд',
        weight: 200,
        deltas: {
            l15: -0.40, a15: -0.50, b15: 0.30,
            l45: -0.35, a45: -0.45, b45: 0.25,
            l110: -0.45, a110: -0.55, b110: 0.35
        },
        formula: [
            { code: '802B', grams: 370 },
            { code: '610', grams: 50 },
            { code: '600', grams: 30 },
            { code: '104B', grams: 80 },
            { code: '400B', grams: 20 }
        ]
    },
    grey: {
        name: 'Серый нейтральный',
        weight: 200,
        deltas: {
            l15: -0.25, a15: 0.02, b15: -0.03,
            l45: -0.20, a45: 0.01, b45: -0.02,
            l110: -0.30, a110: 0.03, b110: -0.04
        },
        formula: [
            { code: '802B', grams: 420 },
            { code: '201', grams: 80 },
            { code: '104B', grams: 200 },
            { code: '400B', grams: 35 }
        ]
    },
    orange: {
        name: 'Оранжевый',
        weight: 200,
        deltas: {
            l15: 0.10, a15: 0.60, b15: 0.80,
            l45: 0.08, a45: 0.55, b45: 0.70,
            l110: 0.12, a110: 0.65, b110: 0.90
        },
        formula: [
            { code: '802B', grams: 360 },
            { code: '950B', grams: 60 },
            { code: '951B', grams: 40 },
            { code: '700', grams: 20 },
            { code: '104B', grams: 70 }
        ]
    },
    violet: {
        name: 'Фиолетовый',
        weight: 200,
        deltas: {
            l15: -0.45, a15: 0.30, b15: -0.50,
            l45: -0.40, a45: 0.25, b45: -0.45,
            l110: -0.50, a110: 0.35, b110: -0.55
        },
        formula: [
            { code: '802B', grams: 380 },
            { code: '740', grams: 45 },
            { code: '741', grams: 30 },
            { code: '300', grams: 25 },
            { code: '400B', grams: 20 }
        ]
    },
    too_light: {
        name: 'Слишком светло',
        weight: 200,
        deltas: {
            l15: 1.20, a15: 0.05, b15: -0.02,
            l45: 1.00, a45: 0.03, b45: -0.01,
            l110: 1.40, a110: 0.07, b110: -0.03
        },
        formula: [
            { code: '802B', grams: 500 },
            { code: '104B', grams: 250 },
            { code: '101B', grams: 100 }
        ]
    },
    too_dark: {
        name: 'Слишком тёмно',
        weight: 200,
        deltas: {
            l15: -1.50, a15: -0.05, b15: -0.08,
            l45: -1.30, a45: -0.03, b45: -0.06,
            l110: -1.70, a110: -0.07, b110: -0.10
        },
        formula: [
            { code: '802B', grams: 350 },
            { code: '400B', grams: 60 },
            { code: '401', grams: 40 },
            { code: '104B', grams: 200 }
        ]
    },
    too_red: {
        name: 'Слишком красно',
        weight: 200,
        deltas: {
            l15: -0.20, a15: 1.00, b15: 0.30,
            l45: -0.15, a45: 0.90, b45: 0.25,
            l110: -0.25, a110: 1.10, b110: 0.35
        },
        formula: [
            { code: '802B', grams: 400 },
            { code: '700', grams: 70 },
            { code: '710B', grams: 50 },
            { code: '104B', grams: 200 }
        ]
    },
    too_blue: {
        name: 'Слишком сине',
        weight: 200,
        deltas: {
            l15: -0.30, a15: -0.15, b15: -1.20,
            l45: -0.25, a45: -0.10, b45: -1.00,
            l110: -0.35, a110: -0.20, b110: -1.40
        },
        formula: [
            { code: '802B', grams: 380 },
            { code: '300', grams: 60 },
            { code: '302B', grams: 40 },
            { code: '104B', grams: 180 }
        ]
    }
};

function loadPreset(presetName) {
    const preset = PRESETS[presetName];
    if (!preset) {
        alert('Пресет не найден: ' + presetName);
        return;
    }

    // Заполняем вес
    document.getElementById('currentWeight').value = preset.weight;

    // Заполняем дельты
    for (const [id, value] of Object.entries(preset.deltas)) {
        document.getElementById(id).value = value.toFixed(2);
    }

    // Снимаем ошибки валидации с дельт
    document.querySelectorAll('#l15,#l45,#l110,#a15,#a45,#a110,#b15,#b45,#b110').forEach(el => el.classList.remove('input-error'));

    // Заполняем формулу
    const formulaDiv = document.getElementById('formulaInputs');
    formulaDiv.innerHTML = '';
    preset.formula.forEach(item => {
        const div = document.createElement('div');
        div.className = 'formula-row';
        div.innerHTML = `<span class="label-code">Код:</span><div class="code-wrapper"><input type="text" class="c-code" value="${item.code}" placeholder="N-400B" oninput="showPigmentName(this)" onkeypress="return handleCodeEnter(event)"><span class="pigment-label"></span></div><span class="label-gram">Грам:</span><input type="number" class="c-val" value="${item.grams}" placeholder="0.0" min="0" step="0.01" oninput="validateGrams(this)" onblur="formatGrams(this)" onkeypress="if(event.keyCode===13){this.blur();return false;} return /[0-9.\\-]/.test(String.fromCharCode(event.keyCode))">`;
        formulaDiv.appendChild(div);
    });

    // Показываем названия пигментов
    formulaDiv.querySelectorAll('.c-code').forEach(input => showPigmentName(input));

    // Автоматически запускаем расчёт
    setTimeout(() => calculate(), 100);

    // Скроллим к результатам
    setTimeout(() => {
        document.getElementById('report').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);

    console.log(`🎨 Загружен пресет: ${preset.name}`);
}

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderHistory();
    // Сброс отчёта при загрузке
    const reportBox = document.getElementById('report');
    reportBox.innerHTML = '';
    reportBox.style.display = 'none';

    // ============================================
    // ПОДХВАТ ОТКАЛИБРОВАННЫХ ВЕКТОРОВ
    // Заменяем приблизительные influence на реальные замеры
    // ============================================
    const calibrated = getCalibratedVectors();
    let calCount = 0;
    for (const [code, data] of Object.entries(calibrated)) {
        if (NASON_PIGMENTS[code]) {
            NASON_PIGMENTS[code].influence = { dL: data.dL, da: data.da, db: data.db };
            NASON_PIGMENTS[code].calibrated = true;
            calCount++;
        }
    }
    if (calCount > 0) {
        console.log(` Подхвачено ${calCount} откалиброванных векторов из localStorage`);
        console.log('   Приблизительные значения influence заменены на реальные замеры.');
        // Показываем панель экспорта калибровки
        const panel = document.getElementById('calExportPanel');
        if (panel) {
            panel.style.display = 'block';
            const info = document.getElementById('calExportInfo');
            if (info) {
                const codes = Object.keys(calibrated).map(c => `N-${c}`).join(', ');
                info.textContent = `Загружено ${calCount} откалиброванных пигментов: ${codes}`;
            }
        }
    }

    // Показываем названия пигментов для начальной формулы
    document.querySelectorAll('.c-code').forEach(input => showPigmentName(input));

    // Применяем сохранённую тему
    const savedTheme = localStorage.getItem('nason-theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        document.getElementById('themeToggle').textContent = '☀️';
    }

    console.log(`✅ Nason Lab v5.1 — ${Object.keys(NASON_PIGMENTS).length} пигментов${calCount > 0 ? ` (${calCount} откалибровано)` : ''}`);
});

// Переключение темы
function toggleTheme() {
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const isDark = root.classList.toggle('dark-theme');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('nason-theme', isDark ? 'dark' : 'light');
}
