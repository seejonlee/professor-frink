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
	// Sliding window technique

	const k = str.charAt(0);
	let start = 1;
	let end = 1;
	let subStr = '';
	let expandWindow = true;
	const uniqueCharMap = {};
	let uniqueCharCount = 0;

	// While start and end have not reached the end of the string
	while (start < str.length && end < str.length) {
		const char = expandWindow ? str.charAt(end) : str.charAt(start);
		// console.group('Loop');
		// console.log(str);
		// console.log(char);
		// console.log('expandWindow', expandWindow);
		// console.log('start', start);
		// console.log('end', end);

		if (expandWindow) {
			if (!uniqueCharMap[char]) {
				uniqueCharCount += 1;
			}
			uniqueCharMap[char] = end;
		}

		if (!expandWindow) {
			// Closing the window
			// Check if we can remove it
			if (uniqueCharMap[char] && uniqueCharMap[char] === start) {
				uniqueCharMap[char] = null;
				uniqueCharCount -= 1;
			}

			if (start !== end) start++;
		}

		if (uniqueCharCount <= k) {
			// Check the substr length and update
			const currentSubStr = str.substring(start, end + 1);
			if (currentSubStr.length > subStr.length) {
				subStr = currentSubStr;
			}
			end++;
			expandWindow = true;
		} else {
			// Close the window
			expandWindow = false;
		}

		// console.log('uniqueCharMap', uniqueCharMap);
		// console.log('uniqueCharCount', uniqueCharCount);
		// console.log('subStr', subStr);
		// console.groupEnd();
	}

	return subStr;
}

console.log(KUniqueCharacters('2aabcaaa'));
console.log(KUniqueCharacters('2aabbcbbbadef'));
console.log(KUniqueCharacters('3aabacbebebe'));
