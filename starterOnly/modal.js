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
const birthdate = document.getElementById('birthdate');
const locations = document.querySelectorAll('input[name="location"]');
const termsCheckbox = document.getElementById('checkbox1');

// Form submit event
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from being submitted and the page from refreshing
  let valid = true;

  // Validation for First Name
  if (firstName.value.trim().length < 2) { 
      valid = false;  // If the first name is less than 2 characters, the form is not valid
      let firstNameError = firstName.parentNode.querySelector('.error_message'); // Check if an error message already exists
      if (!firstNameError) { // If an error message does not exist, create one
          firstNameError = document.createElement('div');
          firstNameError.classList.add('error_message');
          firstName.parentNode.appendChild(firstNameError); // Append the error message to the parent of the first name input
      }
      firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstName.style.border = '2px solid red';
  } else { 
      const firstNameError = firstName.parentNode.querySelector('.error_message'); // If the first name is valid, check if an error message exists
      if (firstNameError) { // If an error message exists, remove it
          firstNameError.remove();
      }
      firstName.style.border = '2px solid green';
  }

  // Validation for Last Name
  if (lastName.value.trim().length < 2) {
      valid = false;
      let lastNameError = lastName.parentNode.querySelector('.error_message');
      if (!lastNameError) {
          lastNameError = document.createElement('div');
          lastNameError.classList.add('error_message');
          lastName.parentNode.appendChild(lastNameError);
      }
      lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastName.style.border = '2px solid red';
  } else {
      const lastNameError = lastName.parentNode.querySelector('.error_message');
      if (lastNameError) {
          lastNameError.remove();
      }
      lastName.style.border = '2px solid green';
  }

  // Validation for Email
  if (!email.value.includes('@') || !email.value.includes('.')) {
      valid = false;
      let emailError = email.parentNode.querySelector('.error_message');
      if (!emailError) {
          emailError = document.createElement('div');
          emailError.classList.add('error_message');
          email.parentNode.appendChild(emailError);
      }
      emailError.innerHTML = "Veuillez entrer une adresse e-mail valide.";
      email.style.border = '2px solid red';
  } else {
      const emailError = email.parentNode.querySelector('.error_message');
      if (emailError) {
          emailError.remove();
      }
      email.style.border = '2px solid green';
  }

  // Validation for Quantity
  if (!(/^\d{1}$/).test(quantity.value.trim())) {
      valid = false;
      let quantityError = quantity.parentNode.querySelector('.error_message');
      if (!quantityError) {
          quantityError = document.createElement('div');
          quantityError.classList.add('error_message');
          quantity.parentNode.appendChild(quantityError);
      }
      quantityError.innerHTML = "Veuillez entrer un chiffre pour la quantité.";
      quantity.style.border = '2px solid red';
  } else {
      const quantityError = quantity.parentNode.querySelector('.error_message');
      if (quantityError) {
          quantityError.remove();
      }
      quantity.style.border = '2px solid green';
  }

  // Validation for Birthdate
  if (!birthdate.value) {
      valid = false;
      let birthdateError = birthdate.parentNode.querySelector('.error_message');
      if (!birthdateError) {
          birthdateError = document.createElement('div');
          birthdateError.classList.add('error_message');
          birthdate.parentNode.appendChild(birthdateError);
      }
      birthdateError.innerHTML = "Veuillez sélectionner une date de naissance valide.";
      birthdate.style.border = '2px solid red';
  } else {
      const birthdateError = birthdate.parentNode.querySelector('.error_message');
      if (birthdateError) {
          birthdateError.remove();
      }
      birthdate.style.border = '2px solid green';
  }

  // Validation for Tournament Location
  let locationChecked = false;
  locations.forEach(function (location) {
      if (location.checked) {
          locationChecked = true;
      }
  });
  if (!locationChecked) {
      valid = false;
      let locationError = document.querySelector('.formData:last-child .error_message');
      if (!locationError) {
          locationError = document.createElement('div');
          locationError.classList.add('error_message');
          document.querySelector('.formData:last-child').appendChild(locationError);
      }
      locationError.innerHTML = "Veuillez sélectionner une option pour le tournoi.";
  } else {
      const locationError = document.querySelector('.formData:last-child .error_message');
      if (locationError) {
          locationError.remove();
      }
  }

  // Validation for Checkbox Terms and Conditions
  if (!termsCheckbox.checked) {
      valid = false;
      let termsCheckboxError = termsCheckbox.parentNode.querySelector('.error_message');
      if (!termsCheckboxError) {
          termsCheckboxError = document.createElement('div');
          termsCheckboxError.classList.add('error_message');
          termsCheckbox.parentNode.appendChild(termsCheckboxError);
      }
      termsCheckboxError.innerHTML = "Veuillez accepter les conditions d'utilisation.";
  } else {
      const termsCheckboxError = termsCheckbox.parentNode.querySelector('.error_message');
      if (termsCheckboxError) {
          termsCheckboxError.remove();
      }
  }
});