// script.js

// Get references to the forms
const signUpForm = document.getElementById("signUp");
const logInForm = document.getElementById("logIn");

// Handle Sign Up
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (username && password) {
        // Save user details in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Sign Up successful!");
        signUpForm.reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Handle Log In
logInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Retrieve user details from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Log In successful!");
    } else {
        alert("Invalid username or password.");
    }
});
