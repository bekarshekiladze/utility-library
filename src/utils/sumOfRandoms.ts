import { fold } from './linearFold';

export function sumOfRandoms(randomArray: number[]): number {
  return fold(randomArray, (acc, el) => acc + el, 0);
}
