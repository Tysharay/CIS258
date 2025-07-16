/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Toya Jackson
      Date:   7/16/25

      Filename: project02-03.js
 */
// onmouseover: show feedback message
document.getElementById("square").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the square";
};

// onmouseout: clear feedback message
document.getElementById("square").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

// onmouseover: show feedback message
document.getElementById("circle").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the circle";
};

// onmouseout: clear feedback message
document.getElementById("circle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

// onmouseover: show feedback message
document.getElementById("triangle").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
};

// onmouseout: clear feedback message
document.getElementById("triangle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};
