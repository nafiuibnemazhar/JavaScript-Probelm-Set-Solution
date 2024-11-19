/**
 * Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

This JavaScript program calculates the area of a triangle with sides of lengths 5, 6, and 7 using Heron's formula. It first computes the semi-perimeter (s) of the triangle, then uses it to find the area, which is logged to the console.
 */

const side1 = 7;
const side2 = 8;
const side3 = 9;

// Calculate the semi-perimeter (s)
const s = (side1 + side2 + side3) / 2;

// Calculate the area using Heron's formula
// Area = Square root of√s(s - a)(s - b)(s - c)
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log("The area of the triangle is: ", area.toFixed(2));
