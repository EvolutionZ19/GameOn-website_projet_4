function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal event

// DOM Elements
const closeBtn = document.querySelectorAll(".close");

// Close modal form
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}

// Close modal with the escape key
document.addEventListener('keydown', function(e) { 
  if (e.key === 'Escape') { 
    modalbg.style.display = "none";
  }
});

// FORM VALIDATION


// DOM Elements
const form = document.querySelector('form');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');

// Form submit event

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from being submitted and the page from refreshing
  let valid = true;

  if (firstName.value.trim().length < 2) {
    valid = false;
    firstName.style.border = '2px solid red';
  } else {
    firstName.style.border = '2px solid green';
  }

  if (lastName.value.trim().length < 2) {
    valid = false;
    lastName.style.border = '2px solid red';
  } else {
    lastName.style.border = '2px solid green';
  }

  if (!email.value.includes('@') && !email.value.includes('.')){ // Check if the email is valid by checking if it contains an @ and a . 
    valid = false;
    email.style.border = '2px solid red';
  } else {
    email.style.border = '2px solid green';
  }

  if (quantity.value.trim() === '' || isNaN(quantity.value)) { // Check if the quantity is a number and not empty IF the quantity is empty, it will be considered as a string
    valid = false;
    quantity.style.border = '2px solid red';
  } else {
    quantity.style.border = '2px solid green';
  }

  if (!valid) { // If the form is not valid, we return to stop the function
    return; 
  }

  form.submit();
});