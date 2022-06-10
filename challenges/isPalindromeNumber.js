/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
		// Base case
	// x is a single digit
	if (Math.floor(x / 10) === 0) return true;
	if (x < 0) return false;
	
	// Without converting x to a string
	// Get the first digit and the last digit.
	const smallestDigit = x % 10;
	let largestDigit = x;
	let tensCount = 0;
	
	while(Math.floor(largestDigit / 10) > 0) {
		largestDigit = Math.floor(largestDigit / 10);
		tensCount++;
	}
	
	if (largestDigit === smallestDigit) {
		let nextNumber = (x - smallestDigit) / 10;
		nextNumber = nextNumber - (largestDigit * Math.pow(10, tensCount - 1));
		// Case where there are sequence of zeros
		if (((x / 100) - nextNumber) < 100 || (Math.floor(nextNumber / 10) === 0)) {
			return isPalindrome(nextNumber);
		} else {
			return false;
		}
	} else {
		return false;
	}
};
