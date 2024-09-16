// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');

    // Function to show sign-in form and hide sign-up form
    function showSignIn() {
        container.classList.remove('right-panel-active');
    }

    // Function to show sign-up form and hide sign-in form
    function showSignUp() {
        container.classList.add('right-panel-active');
    }

    // Event listeners for the buttons
    signInButton.addEventListener('click', showSignIn);
    signUpButton.addEventListener('click', showSignUp);
});
