import { expect, test } from 'vitest';
import { map } from '@lib';

test('doubles array elements in an array', () => {
  const arr = [3, 4, 5];

  function mapDouble(el) {
    return el * 2;
  }

  expect(map(arr, mapDouble)).toStrictEqual([6, 8, 10]);
});
