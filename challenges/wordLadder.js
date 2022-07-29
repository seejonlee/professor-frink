/**
 * Example:
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * Output: 5
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 const isValidSequence = function (w1, w2) {
	const chars = new Set(w1.split(''));
	let count = 0;

	w2.split('').forEach(char => {
		if (!chars.has(char)) count++;
	});

	return count === 1;
}

var ladderLength = function(beginWord, endWord, wordList) {
	// First detect if endWord is in wordList
	// If it's not, there is no valid transformation sequence so return 0.
	// Define your sub-wordList as the start to the index of endWord
	const endWordIdx = wordList.indexOf(endWord);

	if (endWordIdx === -1) return 0;

	const wordListToEnd = wordList.slice(0, endWordIdx + 1);

	// Look through each item in sub-wordList
	// For each item, find the next closest word in sub-wordList that meets the criteria to be adjacent to the current word
	// Assume the order in wordList maintains and items can not get shuffled
	// Need to check for every possible connection beginWord can make with each item in wordList

	// Loop portion of Algorithm
	// 1. Start with the first word in wordList, as currentWord, and see if beginWord can connect to it.
	// 2. If it cannot, update currentWord to the next word and repeat.
	// 3. If it can, look at each following word until you find one that can connect adjacently to the current word
	// 4. If found, record the potential shortest sequence, and repeat.
	let pointer = 0;
	let shortestTransformationSeq = 0;

	for (let i = 0; i < wordListToEnd.length; i++) {
		const currentWord = wordListToEnd[i];

		if (isValidSequence(beginWord, currentWord)) {
			// console.group('valid seq');
			// console.log('beginWord', beginWord);
			// console.log('currentWord', currentWord);
			pointer = i + 1;
			shortestTransformationSeq = (wordListToEnd.length - pointer) + 2;
			while (pointer < wordListToEnd.length) {
				if (isValidSequence(currentWord, wordListToEnd[pointer])) {
					shortestTransformationSeq = (wordListToEnd.length - pointer) + 2;
					// console.log('wordListToEnd[pointer]', wordListToEnd[pointer]);
					// console.log('shortestTransformationSeq', shortestTransformationSeq);
				}
				pointer++;
			}
			// console.groupEnd();
		}
	}

	return shortestTransformationSeq;
};

console.log('Expected output: 5');
console.log('Actual output:', ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']));
console.log('Expected output: 0');
console.log('Actual output:', ladderLength('hit', 'cog', ['hot','dot','dog','lot','log']));
console.log('Expected output: 2');
console.log('Actual output:', ladderLength('a', 'c', ['a','b','c']));
console.log('Expected output: 0');
console.log('Actual output:', ladderLength('hot', 'dog', ['hot','dog']));
