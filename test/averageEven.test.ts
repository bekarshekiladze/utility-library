import { averageEven } from '@lib';
import { expect, test } from 'vitest';

test('calculates average of even numbers', () => {
  expect(averageEven([1, 2, 3, 4, 5, 6, 7, 8])).toBe(5);
});
