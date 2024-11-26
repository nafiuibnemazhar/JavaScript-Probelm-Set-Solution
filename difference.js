/**
 * Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

This JavaScript program calculates the difference between a given number and 13. If the number is less than or equal to 13, it returns the absolute difference. However, if the number is greater than 13, it returns double the absolute difference. It demonstrates conditional statements to determine the appropriate action based on the value of the given number.


 */

function difference(number) {
  if (number <= 13) {
    return number - 13;
  } else {
    return (number - 13) * 2;
  }
}
const result = difference(50);
console.log(result);
