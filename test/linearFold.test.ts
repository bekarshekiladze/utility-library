import { expect, test } from 'vitest';
import { fold } from '@lib';

test('fold(arr, arrayReducer, initialValue) should equal arr elements sum', () => {
  const arr = [1, 2, 3, 4, 5];

  function arrayReducer(accumulator, element) {
    return accumulator + element;
  }

  const initialValue = 0;

  expect(fold(arr, arrayReducer, initialValue)).toBe(
    arr.reduce(arrayReducer, initialValue)
  );
});

test('fold(arr, textAggregator, initialValue) should equal aggregated textArr', () => {
  const textArr = ['text1', 'text2', 'text3'];

  function textAggregator(accumulator, element) {
    return accumulator.concat(element);
  }

  const initialValue = '';

  expect(fold(textArr, textAggregator, initialValue)).toBe(
    textArr.reduce(textAggregator, initialValue)
  );
});
