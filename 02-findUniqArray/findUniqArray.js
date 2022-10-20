/**
 * Описание: найти уникальные числа в массиве чисел
 * Ожидаемый результат: findUniqArray([1, 1, 2, 2, 4, 2, 3, 7, 3]) => [1, 2, 4, 3, 7];
 * @param {Array<number>} arr - Array
 * @returns {Array<number>}
 */
const findUniqArray = arr => {
    // можно двумями способами
    // 1) return Array.from(new Set(arr)) и 2 внизу
    return arr.filter((item, index, arr) => arr.indexOf(item) === index)
}

module.exports = findUniqArray;