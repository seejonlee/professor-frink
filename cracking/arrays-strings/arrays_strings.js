/**
 * 1.1 Is Unique
 * Big O: pg46 ex.3
 * Time complexity: O(n)
 * Space complexity: O(n)
 * 
 * Things I missed:
 * Is the string is ASCII or Unicode?
 * Does capitalizatio matter?
 * If the string length is greater than the conceivable amount of characters, we can return false right away.
 * 
 * Notes:
 * An alternative to the no additional data structure version would be to sort the str first,
 * then loop through and check adjacent characters or values (if taking the integer representation) for matches.
 * This would only be valid if changing (i.e. sorting) the input argument was allowed and using a sorting algorithm,
 * which didn't use additional space/data structures.
 */
function isUnique(str) {
	/**
	 * TODO:
	 * Error check input.
	 * Define var to hold visited characters.
	 * Loop all characters in the string.
	 * 		If character has not been visited, add to set.
	 * 		Otherwise, return false.
	 */
	let result = true;
	let visited = new Set();
	for (let i = 0; i < str.length; i++) {
		if (visited.has(str.charAt(i))) {
			result = false;
			return result;
		} else {
			visited.add(str.charAt(i));
		}
	}

	return result;
}

function isUniqueWithoutDataStructure(str) {
	let result = true;
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str.charAt(i) === str.charAt(j)) {
				result = false;
				return result;
			}
		}
	}

	return result;
}

module.exports = {
	isUnique,
	isUniqueWithoutDataStructure
}
