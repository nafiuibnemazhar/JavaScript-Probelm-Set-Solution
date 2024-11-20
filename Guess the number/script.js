let num = Math.ceil(Math.random() * 10);

console.log(num);

let guessNum = prompt("Guess the number between 1 and 10 inclusive");

if (guessNum == num) {
  console.log("Matched! Good Work!");
} else {
  console.log("Not matched! The number was " + num);
}
