// focus on FIRST principles for efficient development, comment more for readibility + maintainability


// login & register logic
const needAccount = document.getElementById("btn-reg"); // get the "Need an Account?" link
const registerForm = document.getElementById("register"); // get the registration form
const loginForm = document.getElementById("login-form"); // get the login form
// add a click event listener to the "Need an Account?" link
needAccount.addEventListener("click", function() {
  loginForm.style.display = "none"; // hide the login form
  registerForm.style.display = "block"; // show the registration form
});

