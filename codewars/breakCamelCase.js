/**
 * Given a string in camelCase format,
 * return a string with each word broken up by spaces.
 */

let testStr = 'camelCaseCase';

function solution(string) {
  let result = string.replace(/([A-Z])/g, (match) => {
    return ' ' + match;
  });

  return result;
}

// From Codewars solutions
function solution2(string) {
  return string.replace(/([A-Z])/g, ' $1'); // Alternatively could use '$&', which refers to the match, instead of '$1'.
}

console.log(solution(testStr));
console.log(solution2(testStr));
