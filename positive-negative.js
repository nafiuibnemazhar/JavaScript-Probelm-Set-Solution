/**
 * Write a JavaScript program to check two given integers whether one is positive and another one is negative.

This JavaScript program checks two given integers to determine if one is positive and the other is negative. It utilizes conditional statements and logical operators to evaluate whether one integer is greater than zero (positive) and the other is less than zero (negative), returning true if both conditions are met and false otherwise.
 */

function positive_negative(a, b) {
  if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));
console.log(positive_negative(2, 5));
