/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Toya Jackson
      Date:   7/30/25

      Filename: project03-01.js
*/
// Declare variable for menu items collection
let menuItems = document.getElementsByClassName("menuItem");

// Add event listeners to each menu item
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Function to calculate total cost
function calcTotal() {
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  // Display formatted total in the element with id "billTotal"
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Utility function to format number as currency
function formatCurrency(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

