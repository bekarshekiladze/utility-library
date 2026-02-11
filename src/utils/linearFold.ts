// export function fold<T, R>(
//   array: T[],
//   callback: (accumulator: R, currentValue: T, index?: number, array?: T[]) => R,
//   initialValue?: R
// );

export function fold(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i += 1) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
