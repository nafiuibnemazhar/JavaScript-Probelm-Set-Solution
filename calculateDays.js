/**
 * 
 * Write a JavaScript program to calculate the days left before Christmas.

The JavaScript program calculates the number of days left until Christmas by comparing the current date with December 25th of the current year. If today is after December 25th, it calculates the days until next year's Christmas. The difference in days is then logged to the console.
 */

function dayUntilChristmas() {
  const today = new Date();
  const currentYear = today.getFullYear();

  //   Creates a Date object for December 25 of the current year.
  const christmasThisYear = new Date(currentYear, 11, 25);

  let daysLeft;

  if (today > christmasThisYear) {
    const christmasNextYear = new Date(currentYear + 1, 11, 25);
    daysLeft = Math.ceil((christmasNextYear - today) / (1000 * 60 * 60 * 24));
  } else {
    daysLeft = Math.ceil((christmasThisYear - today) / (1000 * 60 * 60 * 24));
  }
  console.log(`There are ${daysLeft} days left until christmas.`);
}
dayUntilChristmas();
