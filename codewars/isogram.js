/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.
 * Ignore letter case.
 * @param {string} str Value to test if it's an isogram.
 */
function isIsogram(str){
  /**
   * Brainstorm:
   * String and need to check each letter
   * Break the string up into data we can work with i.e. chars
   * Look at each character and determine whether or not we've seen it before
   *  - For each letter, check if it's in a set, if not add it, if so, the string is not an isogram.
   * 
   * Edge cases I did not originally consider in my first implementation:
   * 1. What if the last letter is the duplicate
   * 2. Empty string case
   */
  if (str === '') return true;

  let letters = new Set();
  let strLower = str.toLowerCase().replace(' ', '').split(''); // Create array from lowercase string
  let duplicateFound = false;

  // Iterate through the array
  for (let i = 0; i < strLower.length; i++) {
    // Check if letter is in the set
    if (letters.has(strLower[i])) {
      duplicateFound = true;
      break;
    } else {
      letters.add(strLower[i]);
    }
  }

  return !duplicateFound;
}
