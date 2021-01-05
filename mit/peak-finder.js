const matrix = [
	[10, 8, 10, 10],
	[14, 13, 12, 11],
	[15, 9, 11, 21],
	[16, 17, 19, 20]
];

/**
 * Algorithm
 * 1. Let j = column m/2
 * 2. Find the global max value, (i, j) in column j.
 * 3. If (i, j - 1) > (i, j), take the left columns and repeat.
 * 4. Else if (i, j + 1) > (i, j), take the right columns and repeat.
 * 5. Otherwise, you've found a peak.
 */

function find2dPeak(m, j) {
	let maxValue = 0;
	let i = 0;
	m.forEach((row, index) => {
		if (row[j] > maxValue) {
			maxValue = row[j];
			i = index;
		}
	});

	// TODO: Practice mathematics of splitting arrays.
	if (m[i][j - 1] && m[i][j - 1] > maxValue) {
		const leftColumnMid = Math.floor(j / 2) - 1 >= 0 ? Math.floor(j / 2) - 1 : 0;

		return find2dPeak(m, leftColumnMid);
	} else if (m[i][j + 1] && m[i][j + 1] > maxValue) {
		const rightColumns = (m.length - 1) - j;
		const rightColumnMid = (rightColumns > 1 ? Math.floor(rightColumns / 2) + j : j + 1);

		return find2dPeak(m, rightColumnMid);
	} else {
		// Base case.
		return {
			peak: maxValue,
			x: i,
			y: j
		};
	}
}

console.log(find2dPeak(matrix, Math.floor(matrix.length / 2) - 1));
