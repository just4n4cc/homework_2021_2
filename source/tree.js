'use strict';

/**
 * Создает один уровень ёлочки по заданным параметрам.
 *
 * @param {string} char - Материал ёлочки.
 * @param {number} contentNum - Количество символов ёлочки.
 * @param {number} width - Ширина ёлочки.
 * @returns {string} Уровень ёлочки.
 */
const layerBuilder = (content, contentNum, width) => {
    const res = ''.padStart(contentNum, content);
    return res.padStart((width + contentNum) / 2).padEnd(width) + '\n'
}

/**
 * Создает ASCII-ёлочку заданной высоты из звёздочек (*).
 *
 * @param {number|string} number - Высота ёлочки (целое число).
 * @returns {string|null} ASCII ёлочка или null при неправильном входном параметре.
 */
const tree = number => {
    const num = +number;
    if (num < 3 || isNaN(num) || (!Number.isInteger(num))) return null;
    
    const width = num * 2 - 3;

    let treeStructure = [...'|'.padStart(num, '*')];
    const res = treeStructure.reduce(
        (accum, curr, index) => {
            return accum + (curr === '|' ? layerBuilder(curr, 1, width) : layerBuilder(curr, index * 2 + 1, width));
        }, '');

    return res;
}
