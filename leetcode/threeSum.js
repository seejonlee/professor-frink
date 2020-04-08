// 3 Sum
// https://leetcode.com/problems/3sum/
const threeSum = function (nums) {
	// Variable declarations.
	const targetSum = 0;
	let result = [];
	let pairs = {};
	let resultSets = [];
	// TODO: Revisit better solution for all 0's.
	let allZeros = false;

	// Save all possible pairs within nums.
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const pairSum = (nums[i] + nums[j]).toString();
			pairIndices = {
				i1: i,
				i2: j
			};
			// Need to account for sums that appear multiple times.
			if (pairs[pairSum]) {
				pairs[pairSum]['indices'].push(pairIndices);
			} else {
				pairs[pairSum] = {
					'indices': []
				};
				pairs[pairSum]['indices'].push(pairIndices);
			}
		}
	}

	// Find all other values in nums that when summed with the pairs equals 0.
	for (let k = 0; k < nums.length; k++) {
		let addend = targetSum - nums[k].toString();
		if (pairs.hasOwnProperty(addend)) {
			const pair = pairs[addend];
			pair['indices'].forEach((ind) => {
				if (ind.i1 !== k && ind.i2 !== k) {
					// Check that the values haven't been recorded yet.
					const v1 = nums[ind.i1];
					const v2 = nums[ind.i2];
					const v3 = nums[k];
					let exists = false;
					if (resultSets.length > 0) {
						for (let i = 0; i < resultSets.length; i++) {
							const values = resultSets[i];
							if (values.hasOwnProperty(v1.toString())
								&& values.hasOwnProperty(v2.toString())
								&& values.hasOwnProperty(v3.toString())
							) {
								exists = true;
								break;
							}
						}
					}

					// Hack fix here for condition where all values are 0. Need to rethink general approach.
					if (v1 === 0 && v2 === 0 && v3 === 0 && !allZeros) {
						exists = false;
						allZeros = true;
					}

					if (!exists) {
						newTriplet = {};
						newTriplet[v1.toString()] = true;
						newTriplet[v2.toString()] = true;
						newTriplet[v3.toString()] = true;
						resultSets.push(newTriplet);
						const triplet = [
							v1,
							v2,
							v3
						];
						result.push(triplet);
					}
				}
			});
		}
	}

	return result;
}

// Runner
console.log(threeSum([5, -11, -7, -2, 4, 9, 4, 4, -5, 12, 12, -14, -5, 3, -3, -2, -6, 3, 3, -9, 4, -13, 6, 2, 11, 12, 10, -14, -15, 11, 0, 5, 8, 0, 10, -11, -6, -1, 0, 4, -4, -3, 5, -2, -15, 9, 11, -13, -2, -8, -7, 9, -6, 7, -11, 12, 4, 14, 6, -4, 3, -9, -14, -12, -2, 3, -8, 7, -13, 7, -12, -9, 11, 0, 4, 12, -6, -7, 14, -1, 0, 14, -6, 1, 6, -2, -9, -4, -11, 12, -1, -1, 10, -7, -6, -7, 11, 1, -15, 6, -15, -12, 12, 12, 3, 1, 9, 12, 9, 0, -11, -14, -1]));
