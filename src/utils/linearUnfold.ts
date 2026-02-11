export function unfold<T>(
  callBack: (value: T) => T[] | null,
  initialValue: T
): T[] {
  const array: T[] = [];
  let currentValue = initialValue;
  let next: T[] | null;

  while ((next = callBack(currentValue)) !== null) {
    const [value, nextValue] = next;
    currentValue = nextValue;
    array.push(value);
  }

  return array;
}
