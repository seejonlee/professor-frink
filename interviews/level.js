/**
encode();
decode();

Examples:
'aaabbccd' -> '3#52#b2#c'
'###' -> '3##'
'aaaaa' -> '5#a'
 */

function encode(str) {
	let count = 1;
	let prevChar = str.charAt(0);
	let encodedStr = '';

	// Count the sequential runs of characters
	for (let i = 1; i < str.length; i++) {
		const currentChar = str.charAt(i);

		if (currentChar === prevChar) {
			count++;
		} else {
			// When reaching the end of a sequential run, replace the run with the encoded symbol
			encodedStr = encodedStr.concat(`${count}#${prevChar}`);
			prevChar = currentChar;
			count = 1;
		}
	}

	encodedStr = encodedStr.concat(`${count}#${prevChar}`);

	return encodedStr;
}

function decode(str) {
	let decodedStr = '';
	const symbols = str.match(/([\d]+#[\w])/gm);

	symbols.forEach(sym => {
		const values = sym.split('#');
		const letters = Array(Number.parseInt(values[0])).fill(values[1]).reduce((acc, letter) => {
			return acc.concat(letter);
		});

		decodedStr = decodedStr.concat(letters);
	});

	return decodedStr;
}

console.group('Set 1');
console.log(encode('aaaaaaaaaaaaabbbccc2'));
console.log(decode(encode('aaaaaaaaaaaaabbbccc2')));
console.groupEnd();

console.group('Set 2');
console.log(encode('a'));
console.log(decode(encode('a')));
console.groupEnd();
console.group('Set 3');
console.log(encode('aaabbbccc233667dddd'));
console.log(decode(encode('aaabbbccc233667dddd')));
console.groupEnd();
