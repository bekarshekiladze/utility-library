import { curry } from '@lib';
import { test, expect } from 'vitest';

function sum(a: number, b: number, c: number) {
  return a + b + c;
}
const curriedSum = curry(sum);

test('sum(1, 2, 3) should equal curriedSum(1)(2)(3)', () => {
  expect(sum(1, 2, 3)).toBe(curriedSum(1)(2)(3));
});

test('sum(1, 2, 3) should equal curriedSum(1, 2)(3)', () => {
  expect(sum(1, 2, 3)).toBe(curriedSum(1, 2)(3));
});

test('sum(1, 2, 3) should equal curriedSum(1)(2, 3)', () => {
  expect(sum(1, 2, 3)).toBe(curriedSum(1)(2, 3));
});
