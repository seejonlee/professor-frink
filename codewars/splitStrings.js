/**
 *https://www.codewars.com/kata/split-strings/train/javascript
 */

function splitStrings(str) {
  // Remove whitespace.
  str = str.replace(' ', '');
  // If there are an odd num of chars, append a trailing underscore.
  if (str.length % 2 !== 0) str = str.concat('_');

  // Return an array of 2 characters.
  return str.match(/\w\w/g);
}

console.group('Split String');
const ts1 = 'hello';
console.log(splitStrings(ts1));
const ts2 = 'imalongstr';
console.log(splitStrings(ts2));
const ts3 = 'split string';
console.log(splitStrings(ts3));
console.groupEnd('Split String');
