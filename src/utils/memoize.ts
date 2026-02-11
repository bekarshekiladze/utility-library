export function memoize(fn) {
  const primitiveCache = new Map();
  const objectCache = new WeakMap();
  const NAN = Symbol('NaN');

  return function (arg) {
    // handling NaN
    if (Number.isNaN(arg)) {
      if (primitiveCache.has(NAN)) {
        return primitiveCache.get(NAN);
      }
      const result = fn(arg);
      primitiveCache.set(NAN, result);
      return result;
    }
    // end of handling NaN

    const isObject =
      (typeof arg === 'object' && arg !== null) || typeof arg === 'function';

    const cache = isObject ? objectCache : primitiveCache;

    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}
