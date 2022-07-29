/*
2 Pointer problem
Slow pointer and fast pointer

Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.

Input: [0, 0, 1, 1, 1, 2, 2].

Output: 3.

Your function should modify the list in place so the first 3 elements becomes 0, 1, 2. Return 3 because the new length is 3.
*/

function removeDuplicates(arr) {
	let currentValue = arr[0];
	let startPtr = 0;

	// Look at each value in arr
	// If the value is the same as currentValue, cont
	// If it's different, update currentValue, update the array, cont. (might need to update i)

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== currentValue) {
			currentValue = arr[i];
			arr.splice(startPtr + 1, (i - startPtr) - 1);
			startPtr++;
			i = startPtr;
		} else if (i === arr.length - 1) {
			arr.splice(startPtr + 1, 1);
		}
	}

	return arr.length;
}

/**
[0, 0, 1, 1, 1, 2, 2]


[0, 1, 1, 1, 2, 2]
startPtr = 1
i = 4

[0, 1, 2, 2]
startPtr = 2
i = 3

[0, 1, 2, 3]
startPtr = 2
i = 3
**/

  console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2])); // 3
  console.log(removeDuplicates([1, 2, 3])); // 3
  console.log(removeDuplicates([1])); // 1

  // function removeDuplicates(arr) {
  //     let slowPointer = 0;
  //     // let output;

  //     for (let fastPointer = 0; fastPointer <= arr.length; fastPointer++) {
  //         const currentElement = arr[fastPointer];
  //         const previousElement = arr[slowPointer];

  //         if (previousElement !== currentElement) {
  //             slowPointer++;
  //             arr[slowPointer] = currentElement;
  //         }

  //     }

  //     // output = arr.slice(0, slowPointer).join(' ');    
  //     // return output;
  //   return slowPointer;
  // }
