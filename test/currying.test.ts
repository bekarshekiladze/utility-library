import { test, expect } from 'vitest';
import { curry } from '@utils/currying';

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
