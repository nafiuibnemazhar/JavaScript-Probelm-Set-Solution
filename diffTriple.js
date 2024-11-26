/**
 * Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

This JavaScript program computes the absolute difference between a specified number and 19. If the specified number is greater than 19, it returns triple the absolute difference. It utilizes conditional statements to check the given condition and perform the appropriate computation.
 */

function diffNumber(n) {
  if (n <= 19) {
    return n - 19;
  } else {
    return (n - 19) * 3;
  }
}
const result = diffNumber(28);
console.log("The result is: ", result);
