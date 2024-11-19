/**
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

The JavaScript program checks if a given year is a leap year by determining if it is divisible by 4 but not by 100, or if it is divisible by 400. It uses conditional statements to implement these rules and then prints whether the year is a leap year or not.
 */

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2026));
console.log(isLeapYear(2028));
