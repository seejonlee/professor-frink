/*
Description: Takes a string and outputs first all the vowels on a separate line, followed by each consonants also on separate lines.
@param s - string
*/
function vowelsAndConsonants(s) {
  // Store ref to vowels to compare against
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
  let vowels = []
  let consonants = []
  // Look at each character in s
  for (let ch of s) {
    // Save vowels in vowels
    if (vowelSet.has(ch)) {
      vowels.push(ch)
    } else {
      // Save consonants in consonants
      consonants.push(ch)
    }    
  }

  // Output the contents of vowels and consonants in the proper format 
  vowels.forEach((v) => {
    console.log(v)
  })
  consonants.forEach((c) => {
    console.log(c)
  })
}

vowelsAndConsonants('string')