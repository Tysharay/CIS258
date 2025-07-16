/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Toya Jackson
      Date:   7/16/25

      Filename: project02-02.js
 */
 function verifyForm() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;

   (name && email && phone)
      ? window.alert("Thank you!")
      : window.alert("Please fill in all fields");
}

// Attach click event listener to the element with id "submit"
document.getElementById("submit").addEventListener("click", verifyForm);
