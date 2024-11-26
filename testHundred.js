/**
 * 
 * Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

This JavaScript program checks whether a given integer is within 20 units of either 100 or 400. It utilizes conditional statements and the absolute value function to calculate the difference between the given integer and 100 or 400, determining if the difference is less than or equal to 20, returning true if either condition is met and false otherwise.

 */

function testHundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
console.log(testHundred(5));
console.log(testHundred(50));
console.log(testHundred(89));
console.log(testHundred(385));
