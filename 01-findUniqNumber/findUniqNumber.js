/**
 * Описание: найти уникальное число в массиве чисел
 * Ожидаемый результат: findUniqNumber([ 1, 1, 1, 2, 1, 1 ]) => 2;
 * @param {Array<number>} arr - Array
 * @returns {Number}
 */
const findUniqNumber = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let [key, value] of Object.entries(obj)) {
    if (value === 1) return key;
  }

  return -1;
};

module.exports = findUniqNumber;
