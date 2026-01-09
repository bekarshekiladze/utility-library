/* eslint-disable @typescript-eslint/no-unused-vars */
function fold(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

// user action
const arr = [1, 2, 3, 4, 5];

function arrayReductor(accumulator, element, index, array) {
  return accumulator + element;
}

const reducedArr = fold(arr, arrayReductor, 0);
// end of user action

// user action
const textArr = ['text1', 'text2', 'text3'];

function textAgregator(accumulator, element, index, array) {
  return accumulator.concat(element);
}

const agregatedText = fold(textArr, textAgregator, '');
// end of user action

console.log(agregatedText);
