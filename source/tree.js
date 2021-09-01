'use strict';

/**
 * Создает один уровень ёлочки по заданным параметрам.
 *
 * @param {string} char - Материал ёлочки.
 * @param {number} contentNum - Количество символов ёлочки.
 * @param {number} width - Ширина ёлочки.
 * @returns {string} Уровень ёлочки.
 */
const layerBuilder = (char, contentNum, width) => {
    const res = char.repeat(contentNum)
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
    
    let res = '';
    const width = num * 2 - 3;
    let asteriskNum = -1;
    for (let i = 1; i < num; ++i) {
        asteriskNum += 2;
        res += layerBuilder('*', asteriskNum, width);
    }

    res += layerBuilder('|', 1, width);
    return res;
}
