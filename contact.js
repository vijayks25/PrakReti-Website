document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formContainer = document.getElementById('form-container');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from actually submitting

        // Hide the form container
        formContainer.style.display = 'none';

        // Show the confirmation message
        confirmationMessage.classList.remove('hidden');
    });
});