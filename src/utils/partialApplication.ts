export function partial(func, ...boundArgs) {
  return function (...futureArgs) {
    return func.call(this, ...boundArgs, ...futureArgs);
  };
}
