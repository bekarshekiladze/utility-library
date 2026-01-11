import { expect, test } from 'vitest';
import { filter } from '@lib';

test('filters even numbers from an array', () => {
  const numArr = [1, 3, 5, 6, 8, 1234, 6, 453, 9];

  function filterEven(element) {
    return element % 2 === 0;
  }

  expect(filter(numArr, filterEven)).toStrictEqual([6, 8, 1234, 6]);
});

test('filters short text from an array', () => {
  const textArr = ['cumberbach', 'cucumber', 'soft', 'tail', 'rugged'];

  function filterText(element) {
    return element.length < 5;
  }

  expect(filter(textArr, filterText)).toStrictEqual(['soft', 'tail']);
});
