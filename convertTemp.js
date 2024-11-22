/**
 * Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

JavaScript: Fahrenheit and Centigrade Temperatures:

Fahrenheit and centigrade are two temperature scales in use today. The Fahrenheit scale was developed by the German physicist Daniel Gabriel Fahrenheit . In the Fahrenheit scale, water freezes at 32 degrees and boils at 212 degrees.

The centigrade scale, which is also called the Celsius scale, was developed by Swedish astronomer Andres Celsius. In the centigrade scale, water freezes at 0 degrees and boils at 100 degrees. The centigrade to Fahrenheit conversion formula is:

C = (5/9) * (F - 32)

where F is the Fahrenheit temperature. You can also use this Web page to convert Fahrenheit temperatures to centigrade. Just enter a Fahrenheit temperature in the text box below, then click on the Convert button.

Equation:
F = (9C + (32 * 5)) / 5
 *
 */

function cToF(celcius) {
  const cTemp = celcius;

  let cToFahr = (cTemp * 9) / 5 + 32;

  const message = `${cTemp}°C is equal to ${cToFahr}°F`;
  console.log(message);
}

function fToC(fahrenheit) {
  const fTemp = fahrenheit;

  let fToCel = ((fTemp - 32) * 5) / 9;

  const message = `${fTemp}°F is equal to ${fToCel}°C`;
  console.log(message);
}
cToF(28);
fToC(59);
