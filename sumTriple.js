/**
 * Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

This JavaScript program calculates the sum of two given integers. If the two integers are the same, it returns triple their sum. It demonstrates conditional statements to determine whether the integers are equal and to perform the appropriate computation accordingly.
 */

function sumOrTriple(a, b) {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}
const getResult1 = sumOrTriple(5, 5);
console.log("Triple the sum is: ", getResult1);

console.log("----------------");

const getResult2 = sumOrTriple(5, 8);
console.log("The sum is: ", getResult2);
