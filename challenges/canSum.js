/* 
Write a fucntion canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as an argument
The funtion should return a boolean indication wheather or not it is possible to generate the targetSum using numbers from the array
You may use an element of the array as many times as needed.
You may assume that all input numbers are non-negative

[2, 5, 7, 3, 10]
sum = 12

Brute force would be:
3 nested loops
*/
function canSum(target, numbers) {
	console.log(numbers);
	for (let i = 0; i < numbers.length; i++) {
		const outer = numbers[i];
		console.log('outer', outer);
		
		for (let j = i + 1; j < numbers.length; j++) {
			const middle = numbers[j];
			console.log('outer, middle', outer, middle);

			for (let k = i + 1; k < j; k++) {
				const inner = numbers[k];
				console.log('outer, middle, inner', outer, middle, inner);
			}
		}
	}
}

canSum(2, [0, 1, 2, 3, 4]);
