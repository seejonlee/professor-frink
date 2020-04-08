/**
 * ZigZag Conversion
 * https://leetcode.com/problems/zigzag-conversion/
 */
var convert = function(s, numRows) {
	let moveDown = true;
	let moveDiag = false;
	const rowLimit = numRows - 1;
	let xPos = 0;
	let yPos = 0;
	let locations = new Map();

	if (numRows <= 1) {
		result = s;
	} else {
		for (let i = 0; i < s.length; i++) {
			// Save x and y pos of current character.
			locations.set(i, {
				xPos,
				yPos
			});
			// If moving down, inc y and increment steps taken.
			if (moveDown) {
				// If at the end of the column, update direction and reset steps.
				if (yPos <= rowLimit - 1) {
					yPos += 1;
				} else {
					moveDown = false;
					moveDiag = true;
					xPos += 1;
					yPos -= 1;
				}
			} else if (moveDiag) {
				// If at the end of the diagonal line, update direction and reset steps.
				if (yPos > 0) {
					xPos += 1;
					yPos -= 1;
				} else if (yPos === 0) {
					moveDiag = false;
					moveDown = true;
					yPos += 1;
				}
			}
		}
	
		// Create numRows number of arrays of length xPos + 1 if moveDown or xPos if moveDiag.
		let rows = new Array(numRows);

		// Add letters to arrays
		for (let [key, value] of locations) {
			rows[value.yPos] = rows[value.yPos] ? rows[value.yPos].concat(s.charAt(key)) : s.charAt(key);
		}

		result = rows.join('');
	}

	return result;
};

// Runners
console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('ABC', 1));
console.log(convert('ABCDE', 2));
console.log(convert('mygywudenskdpbkchudedyqsbigufifrjmsf', 21));
