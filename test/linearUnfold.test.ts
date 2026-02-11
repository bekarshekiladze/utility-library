import { expect, test } from 'vitest';
import { unfold } from '@lib';

test('unfold should generate numbers from 1 to 10', () => {
  function numGenerator(value) {
    if (value > 10) return null;
    return [value, value + 1];
  }

  expect(unfold(numGenerator, 1)).toStrictEqual(createNumArray(1, 10, 1));
});

// helper
function createNumArray(start, stop, span) {
  return Array.from(
    { length: Math.ceil((stop - start + 1) / span) },
    (_, i) => start + i * span
  );
}
