/**
 * Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

This JavaScript program retrieves the current date and formats it in multiple ways (mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy). It uses the Date object to get the current day, month, and year, and then adds leading zeros if necessary to ensure proper formatting. Finally, it logs the formatted date strings to the console.
 */

// Getting the current date
const today = new Date();

// Extracting the day, month, and year
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();

// Adding leading zeros
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0 + mm";
}

console.log(mm + "-" + dd + "-" + yyyy);
console.log(mm + "/" + dd + "/" + yyyy);
console.log(dd + "-" + mm + "-" + yyyy);
console.log(dd + "/" + mm + "/" + yyyy);
