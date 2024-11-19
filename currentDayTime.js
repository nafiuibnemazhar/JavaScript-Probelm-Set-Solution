/**
 * Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38

This JavaScript program retrieves the current date and time, determines the day of the week, and formats the current hour, minute, and second in 12-hour format with AM/PM notation. It then prints the day of the week and the formatted current time to the console. The program also handles special cases for "Noon" and "Midnight" to ensure an accurate representation.
 */

let today = new Date();

let day = today.getDay();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is: " + dayList[day] + ".");

/***** display the current time *****/

// Retrieving the Current Time
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

// Determining AM or PM
let isAmPm = hour >= 12 ? "PM" : "AM";

//  Converting to 12-Hour Format
hour = hour >= 12 ? hour - 12 : hour;

// Handling Special Cases: Noon and Midnight
// Noon Case
if (hour === 0 && isAmPm === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    isAmPm = "Noon";
  } else {
    hour = 12;
    isAmPm = "PM";
  }
}

// Midnight Case
if (hour === 0 && isAmPm === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    isAmPm = "Midnight";
  } else {
    hour = 12;
    isAmPm = "AM";
  }
}

// Displaying the Current Time
console.log("Current time is: " + hour + isAmPm + ":" + minute + ":" + second);
