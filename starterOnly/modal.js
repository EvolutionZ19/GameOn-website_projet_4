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
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from being submitted and the page from refreshing
    let valid = true;

    // Validation for First Name
    if (firstName.value.trim().length < 2) {
        valid = false;
        document.getElementById('first_name_error').textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        firstName.style.border = '2px solid red';
    } else {
        document.getElementById('first_name_error').textContent = "";
        firstName.style.border = '2px solid green';
    }
    // Add input event listener to first name input
    firstName.addEventListener('input', function() {
    document.getElementById('first_name_error').textContent = ""; // Clear the error message
    firstName.style.border = ''; // Clear the red border
  });

    // Validation for Last Name
    if (lastName.value.trim().length < 2) {
        valid = false;
        document.getElementById('last_name_error').textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        lastName.style.border = '2px solid red';
    } else {
        document.getElementById('last_name_error').textContent = "";
        lastName.style.border = '2px solid green';
    }
    // Add input event listener to last name input
     lastName.addEventListener('input', function() {
      document.getElementById('last_name_error').textContent = ""; // Clear the error message
      lastName.style.border = ''; // Clear the red border
    });

    // Validation for Email
    if (!email.value.includes('@') || !email.value.includes('.')) {
        valid = false;
        document.getElementById('email_error').textContent = "Veuillez entrer une adresse e-mail valide.";
        email.style.border = '2px solid red';
    } else {
        document.getElementById('email_error').textContent = "";
        email.style.border = '2px solid green';
    }
    // Add input event listener to email input
    email.addEventListener('input', function() {
      document.getElementById('email_error').textContent = ""; // Clear the error message
      email.style.border = ''; // Clear the red border
    });

    // Validation for Quantity
    if (quantity.value.trim() === '' || isNaN(quantity.value)) {
        valid = false;
        document.getElementById('quantity_error').textContent = "Veuillez entrer un nombre valide pour la quantité.";
        quantity.style.border = '2px solid red';
    } else {
        document.getElementById('quantity_error').textContent = "";
        quantity.style.border = '2px solid green';
    }

    // Add input event listener to quantity input
    quantity.addEventListener('input', function() {
      document.getElementById('quantity_error').textContent = ""; // Clear the error message
      quantity.style.border = ''; // Clear the red border
    });

    // Validation for Birthdate
    if (!birthdate.value) {
        valid = false;
        document.getElementById('birthday_error').textContent = "Veuillez sélectionner une date de naissance valide.";
        birthdate.style.border = '2px solid red';
    } else {
        document.getElementById('birthday_error').textContent = "";
        birthdate.style.border = '2px solid green';
    }
    // Add input event listener to birthdate input
    birthdate.addEventListener('input', function() {
      document.getElementById('birthday_error').textContent = ""; // Clear the error message
      birthdate.style.border = ''; // Clear the red border
    });

    // Validation for Tournament Location
    let locationChecked = false;
    locations.forEach(function(location) {
        if (location.checked) {
            locationChecked = true;
        }
    });
    if (!locationChecked) {
        valid = false;
        document.getElementById('location_error').textContent = "Veuillez sélectionner une option pour le tournoi.";
    } else {
        document.getElementById('location_error').textContent = "";
    }

    // Validation for Checkbox Terms and Conditions
    if (!termsCheckbox.checked) {
        valid = false;
        document.getElementById('terms_checkbox_error').textContent = "Veuillez accepter les conditions d'utilisation.";
    } else {
        document.getElementById('terms_checkbox_error').textContent = "";
    }


    // Submit the form if valid
    if (valid) {
        form.submit();
    }
});

