export function averageEven(array) {
  const evenNums = filter(array, (el) => el % 2 === 0);
  const sumOfEvents = fold(
    evenNums,
    (acc, el) => {
      return acc + el;
    },
    0
  );
  return sumOfEvents / evenNums.length;
}
console.log(averageEven([1, 3, 5, 6, 6, 6, 6, 8, 2]));

// helpers ( filter, fold)

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

function fold(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i += 1) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
