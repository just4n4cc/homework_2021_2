'use strict';

const tree = number => {
    const num = Number(number);
    if (num < 3 || isNaN(num) || (!Number.isInteger(num))) return null;
    
    let res = '';
    const max_num = num * 2 - 3;
    let asterisk_num = -1;
    for (let i = 1; i < num; ++i) {
        asterisk_num += 2;
        const spaces_num = (max_num - asterisk_num) / 2;
        res += ' '.repeat(spaces_num) + '*'.repeat(asterisk_num) + ' '.repeat(spaces_num) + '\n';
    }

    const spaces_num = (max_num - 1) / 2;
    res += ' '.repeat(spaces_num) + '|' + ' '.repeat(spaces_num) + '\n';
    return res;
}