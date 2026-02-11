export function partial<T, A extends unknown[], B extends unknown[], R>(
  func: (...args: [...A, ...B]) => R,
  ...boundArgs: A
) {
  return function (this: T, ...futureArgs: B): R {
    return func.call(this, ...boundArgs, ...futureArgs);
  };
}
