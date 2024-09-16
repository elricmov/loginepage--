// Script to switch between sign-up and sign-in forms
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Add event listeners to the buttons to add/remove CSS classes for animation
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active"); // Adds class to show sign-up form
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active"); // Removes class to show sign-in form
});
