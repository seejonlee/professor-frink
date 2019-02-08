/**
 * You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. 
 * Responsibilities:
 * 1. Reverse string
 * 2. Wrap in mirror
 * 
 * Error Checks:
 * 1. What is calling this and what should be returned if the input is not of type String.
 */

const framedReflection = (str) => {
  const reverseTxt = (txt) => {
    
    let wordArray = txt.split(' ');
    
    wordArray.forEach((word, index) => {
      wordArray[index] = reverseWord(word);
    });

    return wordArray.join(' ');
  };
  
  const reverseWord = (word) => {
    let charArray = word.split('');
    let i = 0;
    let j = charArray.length - 1;
    
    while (i < j) {
      let temp = charArray[i];
      charArray[i] = charArray[j];
      charArray[j] = temp;
      i++;
      j--;
    }
    
    return charArray.join('');
  }


  const wrapTextInMirror = (txt) => {
    let words = txt.split(' ');
    let maxWordChars = 0;
    let result = '';

    // Iterate the array to Get the length of the longest word, then you know how many characters to output.
    words.forEach((word) => {
      if (word.length > maxWordChars) maxWordChars = word.length;
    });
    // Begin writing lines for each word in the array plus the first and last line.
    words.forEach((word, index) => {
      // Append each work with additional spaces as needed.
      let spaces = maxWordChars - word.length;
      let lineFill = new Array(spaces);
      lineFill.fill(' ');
      words[index] = '* ' + word + lineFill.join('') + ' *\n';
    });

    let topBottom = new Array(maxWordChars + 4);
    topBottom.fill('*');
    topBottom = topBottom.join('');
    
    result = topBottom + '\n';
    words.forEach((word) => {
      result += word;
    });
    result += topBottom;

    return result;
  };

  console.log(wrapTextInMirror(reverseTxt(str)));
}

framedReflection('reverse this');