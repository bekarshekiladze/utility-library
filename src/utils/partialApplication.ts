<<<<<<< HEAD
export function partial<T, A extends unknown[], B extends unknown[], R>(
  func: (...args: [...A, ...B]) => R,
  ...boundArgs: A
) {
  return function (this: T, ...futureArgs: B): R {
=======
export function partial(func, ...boundArgs) {
  return function (...futureArgs) {
>>>>>>> d444196 (wip: implement partial application (untyped))
    return func.call(this, ...boundArgs, ...futureArgs);
  };
}
