/**
 * 
 * Write a JavaScript program to calculate the days left before Christmas.

The JavaScript program calculates the number of days left until Christmas by comparing the current date with December 25th of the current year. If today is after December 25th, it calculates the days until next year's Christmas. The difference in days is then logged to the console.
 */

function dayUntilEid() {
  const today = new Date();
  const currentYear = today.getFullYear();

  //   Creates a Date object for December 25 of the current year.
  const eidThisYear = new Date(currentYear, 3, 2);

  let daysLeft;

  if (today > eidThisYear) {
    const eidNextYear = new Date(currentYear + 1, 3, 2);
    daysLeft = Math.ceil((eidNextYear - today) / (1000 * 60 * 60 * 24));
  } else {
    daysLeft = Math.ceil((eidThisYear - today) / (1000 * 60 * 60 * 24));
  }
  console.log(`There are ${daysLeft} days left until Eid.`);
}
dayUntilEid();
