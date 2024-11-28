/**
 *
 *Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

This JavaScript program creates a new string by adding "Py" in front of a given string. However, if the given string already begins with "Py", it returns the original string without any modification. It checks the initial characters of the given string to determine whether "Py" needs to be added or not.
 */

function stringCheck(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === "Py") {
    return str1;
  } else {
    return "Py" + str1;
  }
}
console.log(stringCheck("Python"));
console.log(stringCheck("thon"));
