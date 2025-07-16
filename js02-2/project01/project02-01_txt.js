/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Toya Jackson
      Date:   7/16/25

      Filename: project02-01.js
 */
// Function to convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
   return (degree - 32) / 1.8;
}

// Function to convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
   return (degree * 1.8) + 32;
}

// Add onchange event handler to element with id "cValue"
document.getElementById("cValue").onchange = function() {
   var cDegree = document.getElementById("cValue").value;
   document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
};

// Add onchange event handler to element with id "fValue"
document.getElementById("fValue").onchange = function() {
   var fDegree = document.getElementById("fValue").value;
   document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
};




