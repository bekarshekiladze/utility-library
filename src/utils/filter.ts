type FilterCallback<T> = (element: T, index: number, array: T[]) => boolean;

export function filter<T>(array: T[], callback: FilterCallback<T>) {
  const result: T[] = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
