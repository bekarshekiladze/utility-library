import { expect, test } from 'vitest';
import { firstElement } from '@lib';

test('Should return first match element from the array', () => {
  const stringArr = ['solo', 'valar', 'han', 'sandkings'];

  expect(firstElement(stringArr, (el) => el.length <= 4)).toBe('solo');
});

test('Should return undefined when no element matches', () => {
  const arr = ['a', 'bb', 'ccc'];

  expect(firstElement(arr, (el) => el.length > 10)).toBeUndefined();
});
