/**
 * Exercise to practice the use of throwing errors in code.
 * Complete the function isPositive which takes one integer parameter.
 * The function checks for 3 conditions and returns the following:
 * 1. 'YES' if the input is a positive integer
 * 2. 'Zero Error' if the input is zero
 * 3. 'Negative Error' if the input is negative
 * @param a - Integer
 * 
 * Considerations:
 * 1. We could make this more flexible by adding additional parameters for  respective callbacks
 * to be executed for the 3 defined conditions, instead of hardcoded messages.
 * 2. Also need to consider non-integer inputs.
 */
function isPositive(a) {
  const lowThreshold = -1;
  const midThreshold = 0;
  const passThreshold = 1;
  const passMessage = 'YES';
  const zeroMessage = 'Zero Error';
  const negativeMessage = 'Negative Error';

  if (a >= passThreshold) return passMessage;
  if (a === midThreshold) throw new Error(zeroMessage);
  if (a <= lowThreshold) throw new Error(negativeMessage);
}