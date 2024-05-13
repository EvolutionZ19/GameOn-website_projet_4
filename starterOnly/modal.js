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