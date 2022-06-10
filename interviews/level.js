/**
encode();
decode();

Examples:
'aaabbcc' -> '3#52#b2#c'
'###' -> '3##'
'aaaaa' -> '5#a'
 */

// If I don't get it, send to Rachel to please send to Eric.
// Since i already didn't get the job there'd be no motivation for me to cheat a solution.
// I did have to look up certain things, specifically the correct regex used in decode().

function encode(str) {
	// Loop the string
	// For each character, see if the subsequent characters are the same
	// While they are the same, continue looping the str
	// Once they are different, append the encode symbol to the result.
	let encodedStr = '';

	for (let i = 0; i < str.length; i++) {
		const currentChar = str.charAt(i);
		let occurrence = 1;

		for (let j = i + 1; j < str.length; j++) {
			if (currentChar === str.charAt(j)) {
				occurrence++;
				i = j;
			} else {
				i = j - 1;
				break;
			}
		}

		encodedStr += `${occurrence}#${currentChar}`;
	}

	return encodedStr;
}

function decode(str) {
	// Read each encoding symbol from 'str'
	// For each symbol, write out the decoded sequence of characters.

	// Use regular expression to extract the symbols.
	const symbols = str.match(/(\d+#\w)/g);
	let decodedStr = '';

	// Loop the symbols and write the decoded str
	symbols?.forEach(symbol => {
		const [occurence, value] = symbol.split('#');
		const subStr = Array.from(new Array(Number.parseInt(occurence) - 1)).reduce((prev, current) => {
			return prev.concat(value);
		}, value);

		decodedStr = decodedStr.concat(subStr);
	});

	return decodedStr;
}

console.group('Set 1');
console.log(encode('aaabbbccc2'));
console.log(decode(encode('aaabbbccc2')));
console.groupEnd();

console.group('Set 2');
console.log(encode('a'));
console.log(decode(encode('a')));
console.groupEnd();
console.group('Set 3');
console.log(encode('aaabbbccc233667dddd'));
console.log(decode(encode('aaabbbccc233667dddd')));
console.groupEnd();
