/**
 * Fizz Buzz
 * The second version takes an object variable specifying the divisors and corresponding strings to output.
 */

//--- BEGIN Base implementation ---//
function fizzBuzz(limit) {
  let d1 = 3;
  let d2 = 5;
  
  for (let i = 1; i <= limit; i++) {
    let output = [];
    if (i % d1 === 0) output.push('Fizz');
    if (i % d2 === 0) output.push('Buzz');
    if (output.length === 0) output.push(i);
    console.log(output.join(' '));
  }
}
//--- END Base Implementation ---//


//--- BEGIN Modified Implementation: Works with variable object of divisors and corresponding output strings. ---//
function createModuloChecker(obj) {
  let fns = [];
  // Return a closure with the specific integer and string
  function createCheckerFn(num, str) {
    return function(value) {
      if (value % num === 0) return str;
      return null;
    }
  }

  for (key in obj) {
    let value = obj[key];
    fns.push(createCheckerFn(key, value));
  }

  return fns;
}

function fizzBuzzExt(numsAndStrs, limit) {
  let checks = createModuloChecker(numsAndStrs);

  // This does result in a nested loop, however, not sure it's possible to get around while having the feature of passing in variable for divisors and strings.
  for (let i = 1; i <= limit; i++) {
    let output = [];
    checks.forEach((checkFn) => {
      let result = checkFn(i);
      if (result) output.push(result);
    });
    if (output.length === 0) output.push(i);
    console.log(output.join(' '));
  }
}
//--- END Modified Implementation ---//


//--- Runners ---//
fizzBuzz(15);

let params = {
  3: 'Fizz',
  5: 'Buzz',
  7: 'Duzz',
  15: 'Muzz',
};

fizzBuzzExt(params, 15);
