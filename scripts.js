document.addEventListener('DOMContentLoaded', function() {
    // Example: Adding a simple alert when the form is submitted
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});
