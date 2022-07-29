const maxSubArraySum = (nums, size) => {
	let startIdx = 0;
	let endIdx = size - 1;
	let maxSum = 0;

	for (let i = endIdx; i < nums.length; i++) {
		// Calculate sub sum
		const sum = nums.slice(startIdx, endIdx + 1).reduce((acc, value) => {
			return acc + value;
		});

		maxSum = Math.max(sum, maxSum);

		// Update the window
		startIdx++;
		endIdx++;
	}

	return maxSum;
}

console.log(maxSubArraySum([1,2,3,5,4,8,6,2], 3)) // 18
console.log(maxSubArraySum([2,2,3,1], 2)) // 5

function MovingMedian(arr) {
	const windowSize = arr[0];
	let startIdx = 1;
	let endIdx = 1;
	let result = '';

	for (let i = endIdx; i < arr.length; i++) {
		// const subArray = arr.slice(startIdx, endIdx + 1);
		// Calculate the median for the window subarray
		const median = getMedian(arr, startIdx, endIdx);
		result = i < arr.length - 1 ? result.concat(`${median},`) : result.concat(`${median}`);

		// Update the window
		if ((endIdx - startIdx) + 1 === windowSize) {
		startIdx++;
		}
		endIdx++;
	}

	return result;
}

console.log(MovingMedian([5, 2, 4, 6])); //2,3,4
console.log(MovingMedian([3, 0, 0, -2, 0, 2, 0, -2])); // 0,0,0,0,0,0,0
console.log(MovingMedian([3, 1, 3, 5, 10, 6, 4, 3, 1])); // 1,2,3,5,6,6,4,3

