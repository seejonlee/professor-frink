/*
String Reduction

Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. 

The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. 

This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.

For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.

Examples

Input: "abcabc"
Output: 2

Input: "cccc"
Output: 4
*/

function isUnique(str) {
	const visited = new Set();

	for (let i = 0; i < str.length; i++) {
		if (visited.has(str.charAt(i))) {
			return false;
		} else {
			visited.add(str.charAt(i));
		}
	}

	return true;
}

function replaceStr(c1, c2) {
	let result = 'abc';

	result = result.replace(c1, '');
	result = result.replace(c2, '');

	return result;
}

// 'abcabc'
function stringReduction(str) {
	// Recursively thinking:
	// Identify the sub-problem to be solved
	// We can break the problem down by solving for the first 2
	// different characters found and then solving for the updated string.

	// Base case
	// The input str size is 1
	// The input size is 2 and the chars are different
	// the input size is 3 and the chars are different
	if (str.length === 1) return 1;
	if (str.length === 2 && !isUnique(str)) return 2;
	if (str.length === 2 && !isUnique(str)) return 3;

	for (let i = 0; i < str.length - 1; i++) {
		const first = str.charAt(i);
		const second = str.charAt(i + 1);

		if (isUnique(first + second)) {
			const updatedStr = str.substring(0, i) + replaceStr(first, second) + str.substring(i + 2);
			return stringReduction(updatedStr);
		}
	}

	return str.length;
}

/*
	a b c a b c
	c c a b c
	c b b c
	a b c
	c c

	return 2
*/

console.log(stringReduction('abcabc'));
console.log(stringReduction('cccc'));
console.log(stringReduction('ccca'));
