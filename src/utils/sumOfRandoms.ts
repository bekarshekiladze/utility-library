export function sumOfRandoms(randomArray: number[]): number {
  return fold(randomArray, (acc, el) => acc + el, 0);
}

// helpers (createRandomNumbers, fold)
export function createRandomNumbers(
  elCount: number,
  upperBoundary: number
): number[] {
  return Array.from({ length: elCount }, () =>
    Math.floor(Math.random() * upperBoundary)
  );
}

// fold
function fold(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i += 1) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
