/*
K Unique Characters

Have the function KUniqueCharacters(str) take the str parameter being passed and find the longest substring that contains k unique characters, where k will be the first character from the string. The substring will start from the second position in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.

Examples

Input: "3aabacbebebe"
Output: cbebebe

Input: "2aabbcbbbadef"
Output: bbcbbb
*/
function KUniqueCharacters(str) {
	// Sliding Window
	let startIdx = 1;
	let endIdx = 1;
	let k = str.charAt(0);
	let substring = '';
	// key: char
	// value: last visited index
	let visitedChars = {};
	let numUniqueChars = 0;
	let expandWindow = true;

	while (startIdx < str.length && endIdx < str.length) {
		const currentChar = (expandWindow ? str.charAt(endIdx) : str.charAt(startIdx));

		if (expandWindow) {
			if (!visitedChars[currentChar]) {
				numUniqueChars++;
			}
			visitedChars[currentChar] = endIdx;
		}

		if (!expandWindow) {
			// Check if we can reduce the amount of unique characters in this window
			if (visitedChars[currentChar] && visitedChars[currentChar] === startIdx) {
				visitedChars[currentChar] = null;
				numUniqueChars--;
			}
			// We update startIdx whenever we are closing the window because this
			// represents the actual closing of the window.
			startIdx++;
		}

		if (numUniqueChars <= k) {
			const currentSubstring = str.slice(startIdx, endIdx + 1);
			if (currentSubstring.length > substring.length) {
				substring = currentSubstring;
			}

			// We have not exceeded the limit of unique chars so keep on expanding the window.
			expandWindow = true;
			endIdx++
		} else {
			// Flag that the next iteration should look at the startIdx.
			expandWindow = false;
		}
	}

	return substring;
}

console.log(KUniqueCharacters('2aabcaaa'));
console.log(KUniqueCharacters('2aabbcbbbadef'));
console.log(KUniqueCharacters('3aabacbebebe'));
