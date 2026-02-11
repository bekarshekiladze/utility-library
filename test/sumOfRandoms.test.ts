import { expect, test } from 'vitest';
import { sumOfRandoms } from '@lib';

test('should return correct sum of the random numbers array', () => {
  const randomNumbers = createRandomNumbers(5, 10);

  expect(sumOfRandoms(randomNumbers)).toBe(
    randomNumbers.reduce((acc, el) => acc + el, 0)
  );
});

// helper
export function createRandomNumbers(
  elCount: number,
  upperBoundary: number
): number[] {
  return Array.from({ length: elCount }, () =>
    Math.floor(Math.random() * upperBoundary)
  );
}
