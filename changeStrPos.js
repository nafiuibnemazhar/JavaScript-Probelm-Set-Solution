/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

This JavaScript program creates a new string from a given string by swapping the positions of the first and last characters. It ensures that the length of the string is greater than or equal to 1 to perform the swap operation safely. By using string manipulation methods like charAt() and concatenation, it constructs the new string with the first and last characters swapped.
 */

function stringChange(str1) {
  if (str1.length <= 1) {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);

  return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
}
console.log(stringChange("ab"));
console.log(stringChange("abc"));
