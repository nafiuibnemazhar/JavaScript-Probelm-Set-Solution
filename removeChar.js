/**
 * Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

This JavaScript program removes a character at a specified position in a given string and returns the modified string. It takes the position as input and removes the character at that position using string manipulation methods like substring() or slice(). Finally, it returns the modified string after removing the character at the specified position.
 */

function removeChar(str, charPosition) {
  part1 = str.substring(0, charPosition);
  part2 = str.substring(charPosition + 1, str.length);

  return part1 + part2;
}
console.log(removeChar("Python", 0));
console.log(removeChar("Python", 2));
console.log(removeChar("Python", 4));
