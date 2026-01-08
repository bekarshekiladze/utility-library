import { partial } from '@utils/partialApplication';
import { expect, test } from 'vitest';

test("partial preserves 'this' and binds arguments", () => {
  const user: {
    firstName: string;
    greeting: string;
    setGreeting(time: string, phrase: string): void;
    setGreetingEasy?: (phrase: string) => unknown;
  } = {
    firstName: 'John',
    greeting: '',
    setGreeting(time: string, phrase: string) {
      this.greeting = `[${time}] ${this.firstName}: ${phrase}`;
    },
  };

  user.setGreetingEasy = partial(user.setGreeting, '10:00');

  user.setGreetingEasy('Hello');

  expect(user.greeting).toBe('[10:00] John: Hello');
});
