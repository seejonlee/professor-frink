function reverseString(s) {
  let result;
  try {
    // Reverse the input string
    let strArr = s.split('');
    result = '';
    for (let i = strArr.length - 1; i >= 0; i--) {
      result += strArr[i];
    }
  } catch (e) {
    // If exception is thrown, return the original value
    console.log(e.message);
    result = s;
  } finally {
    console.log(result);
  }
}


let passStr = 'Hello';
let failStr = 123;

reverseString(passStr);
reverseString(failStr);