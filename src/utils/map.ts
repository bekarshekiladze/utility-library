type MapCallback<T, U> = (el: T, index: number, array: T[]) => U;

export function map<T, U>(array: T[], callback: MapCallback<T, U>): U[] {
  const resultArr: U[] = [];

  for (let i = 0; i < array.length; i += 1) {
    resultArr.push(callback(array[i], i, array));
  }

  return resultArr;
}

const arr = [3, 4, 5];

function mapDouble(el) {
  return el * 2;
}

const doubled = map(arr, mapDouble);
console.log(doubled);
