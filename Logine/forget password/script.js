// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the form and button elements
    const form = document.querySelector('.forgot-password-container form');
    const emailInput = document.querySelector('input[type="email"]');
    const button = document.querySelector('button');

    // Function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = emailInput.value.trim();

        // Validate email
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (e.g., via an API)
        button.textContent = 'Sending...';
        button.disabled = true;

        // Simulate a delay for form submission
        setTimeout(() => {
            alert('A password reset link has been sent to your email address.');
            form.reset(); // Reset the form fields
            button.textContent = 'Send Reset Link';
            button.disabled = false;
        }, 2000); // 2 seconds delay for simulation
    }

    // Attach event listener to the form
    form.addEventListener('submit', handleFormSubmit);
});
