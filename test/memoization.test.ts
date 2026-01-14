import { expect, test } from 'vitest';
import { memoize } from '@lib';

const memoizedFibonacci = memoize(function (n) {
  if (n < 2) return n;
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

function fibonacciNum(n) {
  if (n < 2) return n;
  return fibonacciNum(n - 1) + fibonacciNum(n - 2);
}

test('That memoized fibonacci much faster than regular one', () => {
  const n = 15; //after 25 calculation time is noticeable

  const regularStart = performance.now();
  const regularResult = fibonacciNum(n);
  const regularEnd = performance.now();

  const memoizedStart = performance.now();
  const memoizedResult = memoizedFibonacci(n);
  const memoizedEnd = performance.now();

  expect(regularResult).toBe(memoizedResult);
  expect(regularEnd - regularStart).toBeGreaterThan(
    memoizedEnd - memoizedStart
  );
});
