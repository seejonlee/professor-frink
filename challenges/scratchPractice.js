// Find a pair of numbers, within a collection, that equal a given sum.
function getSumSet(numbers, sum) {
	// Define variables
	let visitedNums = new Set();
	let currentValue = undefined;
	let addend = undefined;
	let result = [];

	// Iterate through each value in the array
	numbers.forEach((num) => {
		// Calculate the number needed to make a sum with the current number
		addend = sum - num;
		// Check if this value exists within the set
		if (visitedNums.has(addend)) {
			// If yes, return the pair.
			result.push({
				addend_1: num,
				addend_2: addend
			});
		} else {
			// Otherwise, add the current value to the set and continue
			visitedNums.add(num);
		}
	});

	return result.length > 0 ? result : null;
}

// Runner
// console.log(getSumSet([1, 2, 3, 9], 8));
// console.log(getSumSet([1, 2, 4, 4], 8));

// Fibonacci recursion
function fib(n) {
	if (n <= 2) {
		if (n === 2) {
			return 1;
		} else {
			return 0;
		}
	}

	return fib(n - 1) + fib(n - 2);
}

// Runner
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));

function strictEquals(a, b) {
	if (Object.is(a, NaN) && Object.is(b, NaN)) return false;
	if ((Object.is(a, 0) && Object.is(b, -0)) || (Object.is(a, -0) && Object.is(b, 0))) return true;
	return Object.is(a, b);
}

// Runner
// console.log('NaN, NaN: ', strictEquals(NaN, NaN));
// console.log('0, -0: ', strictEquals(0, -0));
// console.log('-0, 0: ', strictEquals(-0, 0));
// console.log('hello, hello: ', strictEquals('hello', 'hello'));
// console.log('hello, goodbye: ', strictEquals('hello', 'goodbye'));
// console.log('1, 2: ', strictEquals(1, 2));
// console.log('2, 2: ', strictEquals(2, 2));
// console.log('NaN, 2: ', strictEquals(NaN, 2));

function partsSums(ls) {
	if (ls.length === 0) return [0];

	let sop = [];
	let sum = 0;
	sop.unshift(sum);

	for (let i = ls.length - 1; i >= 0; i--) {
		sum = sum + ls[i];
		sop.unshift(sum);
	}

	return sop;
}

function partsSumsV2(ls) {
	if (ls.length === 0) return [0];

	let sop = new Array(ls.length + 1);
	let sum = 0;
	sop[sop.length - 1] = sum;

	for (let i = ls.length - 1; i >= 0; i--) {
		sum = sum + ls[i];
		sop[i] = sum;
	}

	return sop;
}

// Runner
// console.log(partsSums([0, 1, 3, 6, 10]));
// console.log(partsSums([1, 2, 3, 4, 5, 6]));
// console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));

// console.log(partsSumsV2([0, 1, 3, 6, 10]));
// console.log(partsSumsV2([1, 2, 3, 4, 5, 6]));
// console.log(partsSumsV2([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));

// Big-O Practice: https://www.interviewcake.com/big-o-notation-practice-questions
// https://www.interviewcake.com/question/javascript/product-of-other-numbers
function getProductsOfAllIntsExceptAtIndex(factors) {
	let products = [];

	for (let i = 0; i < factors.length; i++) {
		let product = 1;

		for (let j = 0; j < factors.length; j++) {
			if (j !== i) product = product * factors[j];
		}

		products.push(product);
	}

	return products;
}

// Using reduce
function getProductsOfAllIntsExceptAtIndexV2(factors) {
	let products = [];

	for (let i = 0; i < factors.length; i++) {
		let product = factors.reduce((acc, el, index) => {
			if (index !== i) {
				return acc * el;
			} else {
				return acc;
			}
		});
		products.push(product);
	}

	return products;
}

/**
 * Improvements:
 * Start with 1 at beginning of start and 1 at end of end.
 * This way each index for start and end correspond to the products all before or after, non inclusive.
 * This makes calculating the result easier and lends to saving space.
 * Could also maintain 1 array of objects, each with a start and end property.
 * Then the final result is the product of the props in each object.
 * Alternatively, we can just multiply the result of what would be the end array by the values
 * we previously stored in the start array, and that will be our returned result.
 */
function getProductsOfAllIntsExceptAtIndexV3(factors) {
	let start = [];
	let end = [];
	let products = [];

	for (let i = 0; i < factors.length; i++) {
		if (i === 0) {
			start.push(factors[i]);
		} else {
			start.push(start[i - 1] * factors[i]);
		}
	}

	for (let i = factors.length - 1; i >= 0; i--) {
		if (i === factors.length - 1) {
			end.unshift(factors[i]);
		} else {
			end.unshift(end[0] * factors[i]);
		}
	}

	for (let i = 0; i < factors.length; i++) {
		if (i === 0) {
			products.push(end[i + 1]);
		} else if (i === factors.length - 1) {
			products.push(start[i - 1]);
		} else {
			products.push(start[i - 1] * end[i + 1]);
		}
	}

	return products;
}

// Runner
// console.log(getProductsOfAllIntsExceptAtIndex([1, 1, 1]));
// console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
// console.log(getProductsOfAllIntsExceptAtIndexV2([1, 1, 1]));
// console.log(getProductsOfAllIntsExceptAtIndexV2([1, 7, 3, 4]));
// console.log(getProductsOfAllIntsExceptAtIndexV3([1, 1, 1]));
// console.log(getProductsOfAllIntsExceptAtIndexV3([1, 7, 3, 4]));


/**
 * Two Number Sum
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum ¸up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
 * Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
 * You can assume that there will be at most one pair of numbers summing up to the target sum.
 * Test Case:
 * 			array = [3, 5, -4, 8, 11, 1, -1, 6];
 * 			targetSum = 10;
 * 			[-1, 11] // output - the numbers could be in reverse order
*/
/**
 * Time complexity: Loop the input array at most one time through -> O(n).
 * Space complexity: Store each visited value in the array in a set,
 * which will be at most the length of the array. So including the input
 * array will yield O(2n) => O(n).
 */
function twoNumberSum(addends, sum) {
	// Set to store visited addends for quick lookup.
	// Allows us to run in linear time.
	const visited = new Set();
	const result = [];

	if (addends.length > 0) {
		addends.forEach(value => {
			// Calculate the required value that will equal the sum when added with the current iterated value.
			const pairAddend = sum - value;

			if (visited.has(pairAddend)) {
				result.push(pairAddend);
				result.push(value);
				return result;
			} else {
				visited.add(value);
			}
		});
	}

	return result;
}

// Runner
// console.log('Two Number Sum');
// console.log('Expected Result: [11, -1]', twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
// console.log('Expected Result: [1, -1]', twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 0));
// console.log('Expected Result: []', twoNumberSum([3], 3));
// console.log('Expected Result: []', twoNumberSum([3, 1, 5, -5], 3));


/**
 * Caesar Cipher Encryptor
 * Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by ¸shifting every letter in the input string by k positions in the alphabet, where k is the key.
 * Note that letters should "wrap" around the alphabet; in other words, the letter `z` shifted by one returns the letter `a`.
 * Bonus
 * 1. Can you allow for [A-Z|a-z|0-9]?
 * 2. Can you complete the algorithm without using O(n) extra space(declaring an alphabet array for example)?
 */
/**
 * Time complexity: Loop the input string at most one time through -> O(n).
 * Space complexity: O(n) where n is the size of the input string. I know I could modify the
 * input string itself and not use additional storage for the 'cipher' and 'source' variables, but I'm keeping it this way
 * because I believe it's more readable.
 */
function caesarCipherEncryptor(input, key) {
	let cipher = '';
	// Can normalize the string in any way should we need to. (i.e. convert to all lower case).
	const source = input;

	// Define number bounds of LOWERCASE alphabet
	const alphaLowerCaseFloor = 97; // ASCII decimal for 'a'
	const alphaLowerCaseCeiling = 123; // 1 + the ASCII decimal for 'z' (i.e. 122)
	// Define number bounds of UPPERCASE alphabet
	const alphaUpperCaseFloor = 65; // ASCII decimal for 'A'
	const alphaUpperCaseCeiling = 91; // 1 + the ASCII decimal for 'z' (i.e. 90)
	// Define number bounds of NUMBERS
	const numberFloor = 48; // ASCII decimal for 0
	const numberCeiling = 58; // 1 + the ASCII decimal for 9 (i.e. 57)


	// Helpers that execute the below algorithm
	/**
	 * 1. Convert character to number.
	 * 2. Update number by adding k to it.
	 * 3. Shift the number so it stays within the ASCII alphanumeric bounds.
	 * 4. Convert number back to character.
	 * 5. Return character.
	 */
	function shiftChar(char, key) {
		const charCode = char.charCodeAt(0);

		if (charCode >= numberFloor && charCode < numberCeiling) {
			return getShiftedChar(char, key, numberFloor, numberCeiling);
		} else if (charCode >= alphaUpperCaseFloor && charCode < alphaUpperCaseCeiling) {
			return getShiftedChar(char, key, alphaUpperCaseFloor, alphaUpperCaseCeiling);
		} else if (charCode >= alphaLowerCaseFloor && charCode < alphaLowerCaseCeiling) {
			return getShiftedChar(char, key, alphaLowerCaseFloor, alphaLowerCaseCeiling);
		} else {
			return char;
		}
	}

	function getShiftedChar(char, key, lowerASCIIBound, upperASCIIBound) {
		let shiftedPosition = char.charCodeAt(0) + key;

		if (shiftedPosition > upperASCIIBound - 1) {
			shiftedPosition = (shiftedPosition % upperASCIIBound) + lowerASCIIBound;
		}

		return String.fromCharCode(shiftedPosition);
	}

	// Loop string and shift characters/numbers
	for (let i = 0; i < source.length; i += 1) {
		const cipherChar = shiftChar(source.charAt(i), key);
		cipher += cipherChar;
	}

	return cipher;
}

// Runner
console.log('Caesar Cipher Encryptor');
console.log('Expected Result: zab ', caesarCipherEncryptor('xyz', 2));
console.log('Expected Result: abc ', caesarCipherEncryptor('abc', 0));
console.log('Expected Result: tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm ', caesarCipherEncryptor('mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf', 7));
console.log('Expected Result: Cheud-726 ', caesarCipherEncryptor('Zebra-493', 3));
console.log('Expected Result: xyzaWUVwuv-444.@ ', caesarCipherEncryptor('stuvRPQrpq-999.@', 5));
