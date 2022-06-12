function binarySearch(arr, target) {
	let startIdx = 0;
	let endIdx = arr.length - 1;
	let midIdx;

	while (startIdx <= endIdx) {
		// Look at the midpoint value
		midIdx = Math.ceil((endIdx - startIdx) / 2) + startIdx;
		// If midpoint is the target value, return it and you're done
		if (arr[midIdx] === target) {
			return midIdx;
		}

		// Otherwise see which half of the array to look for
		if (target < arr[midIdx]) {
			// Look at the less than half
			endIdx = midIdx - 1;
		} else {
			// Look at the greater than half
			startIdx = midIdx + 1;
		}
	}

	return -1;
}

console.log('Expected output: 4 ->', binarySearch([1, 3, 11, 59, 200, 301, 600], 200));
console.log('Expected output: 3 ->', binarySearch([1, 3, 11, 59, 200, 301, 600], 59));
console.log('Expected output: 0 ->', binarySearch([1, 3, 11, 59, 200, 301, 600], 1));
console.log('Expected output: 6 ->', binarySearch([1, 3, 11, 59, 200, 301, 600], 600));
