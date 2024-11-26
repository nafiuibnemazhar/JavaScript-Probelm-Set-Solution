/**
 * Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

This JavaScript program checks a pair of numbers and returns true if one of the numbers is 50 or if their sum equals 50. It utilizes logical operators and conditional statements to evaluate the given conditions and return the appropriate result.
 */

function sameSum(a, b) {
  //   if (a === 50) {
  //     return true;
  //   } else if (b === 50) {
  //     return true;
  //   } else if (a + b === 50) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //or short version same as above
  return a === 50 || b === 50 || a + b === 50;
}
const result = sameSum(55, 40);
console.log(result);
