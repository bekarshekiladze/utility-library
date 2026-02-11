type FirstCallBack<T> = (element: T, index: number, array: T[]) => boolean;

export function firstElement<T>(
  array: T[],
  callBack: FirstCallBack<T>
): T | undefined {
  for (let i = 0; i < array.length; i += 1) {
    if (callBack(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
