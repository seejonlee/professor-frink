/*
Takes input n, then rounds it up to the next multiple of 5.
@param n - Integer

Questions:
1. How will this be used, what calls it?
2. Related to #1, how to handle errors. If n is not an integer do we round, return,...?
Additional Considerations:
- Parameterize the multiple value
Optimizations:
*/
function roundToNext5(n, multiple = 5){
  let result;

  // Input guard
  if (Number.isInteger(n)) {
    result = n;
  } else {
    throw new Error('Input must be an integer');
  }
  
  // If n is already a multiple of 5, return it
  if (result % multiple === 0) return result;

  // Otherwise, continue to increase the value of n by 1 until it evenly divisible by 5
  for (let i = 0; i < 4; i++) {
    if (++result % multiple === 0) break;
  }
  return result;
}

console.log(roundToNext5(11));
console.log(roundToNext5(10));
console.log(roundToNext5(-5));
console.log(roundToNext5(-2));
console.log(roundToNext5(-6, 4));