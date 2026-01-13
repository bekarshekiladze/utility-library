export function lazy(fn, ...args) {
  return function () {
    return fn(...args);
  };
}
