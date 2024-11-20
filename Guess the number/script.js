/**
 * Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
 */

let num = Math.ceil(Math.random() * 10);

console.log(num);

let guessNum = prompt("Guess the number between 1 and 10 inclusive");

if (guessNum == num) {
  console.log("Matched! Good Work!");
} else {
  console.log("Not matched! The number was " + num);
}
