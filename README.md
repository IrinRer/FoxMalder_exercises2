# Решение задач на JS

## Задача 1

**Описание:** найти уникальное число в массиве чисел.

**Ожидаемый результат:** 

``findUniqNumber([ 1, 1, 1, 2, 1, 1 ]) => 2;``

**Решение**:

```
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
```

## Задача 2

**Описание:** найти уникальные числа в массиве чисел.

**Ожидаемый результат:** 

``findUniqArray([1, 1, 2, 2, 4, 2, 3, 7, 3]) => [1, 2, 4, 3, 7]``

**Решение**:

Можно решить двумя способами:

1.

```
const findUniqArray = arr => {
    return arr.filter((item, index, arr) => arr.indexOf(item) === index)
}
```

2. 

```
const findUniqArray = arr => {
    return Array.from(new Set(arr))
}
```

## Задача 3

**Описание:** написать функцию, которая принимает несколько объектов и возвращает новый объект, объединяющий все входные объекты.
Все свойства входного объекта - числовые значения. Объекты объединяются вместе, т.е. значения совпадающих ключей складываются вместе. 
Функция должна быть чистой, т.е. нельзя изменять входные параметры.

**Ожидаемый результат:**

```
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) => { a: 13, b: 20, c: 36, d: 3 }
```

**Решение:**

```
const combineObjects = (...rest) => {
  const obj = {};

  for (let item of rest) {
    for (let key in item) {
      obj[key] = (obj[key] || 0) + item[key];
    }
  }
  return obj;
};
```
