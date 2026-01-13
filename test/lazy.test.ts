import { expect, test, vi } from 'vitest';
import { lazy } from '@lib';

test('testing thunk based lazy function implementation', () => {
  const add = vi.fn((a, b, c) => a + b + c);
  const lazyAdd = lazy(add, 4, 5, 6);

  // proving that add hasn't been called yet.
  expect(add).not.toHaveBeenCalled();

  let result = lazyAdd();

  // proving that it's been called once
  expect(add).toHaveBeenCalledTimes(1);

  result = lazyAdd();

  // proving that it's been called twice
  expect(add).toHaveBeenCalledTimes(2);

  expect(result).toBe(add(4, 5, 6));
});
