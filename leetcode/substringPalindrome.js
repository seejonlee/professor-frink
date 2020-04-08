// Longest Substring Palindrome
// https://leetcode.com/problems/longest-palindromic-substring
function longestSubStringPalindrome(s) {
	let start = 0;
	let end = 0;
	let max = (end - start) + 1;

	for (let i = 0; i < s.length; i++) {
		let current = i;
		let before = i - 1;
		let after = i + 1;

		while (before >= 0 && s.charAt(before) === s.charAt(after)) {
			let newLength = (after - before) + 1;
			if (newLength > max) {
				max = newLength;
				start = before;
				end = after;
			}

			if (before === 0 || after === s.length - 1) {
				break;
			} else {
				before--;
				after++;
			}
		}

		// Reset before and after for next check.
		before = i - 1;
		after = i + 1;

		while (after < s.length && s.charAt(current) === s.charAt(after)) {
			let newLength = (after - current) + 1;
			if (newLength > max) {
				max = newLength;
				start = current;
				end = after;
			}

			if (current === 0 || after === s.length - 1) {
				break;
			} else {
				current--;
				after++;
			}
		}
	}

	return s.slice(start, end + 1);
}

// Runners
console.log(longestSubStringPalindrome('bab'));
console.log(longestSubStringPalindrome('baa'));
console.log(longestSubStringPalindrome('babad'));
console.log(longestSubStringPalindrome('cbbd'));
console.log(longestSubStringPalindrome('bb'));
console.log(longestSubStringPalindrome('a'));
console.log(longestSubStringPalindrome('aac'));
console.log(longestSubStringPalindrome('aaaa'));
console.log(longestSubStringPalindrome('dddddddd'));
