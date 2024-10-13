// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Display confirmation message
        responseMessage.textContent = 'Your message is sent!';
        responseMessage.style.display = 'block'; // Show the message
        responseMessage.style.color = '#1abc9c'; // Optional: Change text color
        responseMessage.style.fontSize = '1.2rem'; // Optional: Adjust text size

        // Optionally, you can also reset the form fields after submission
        form.reset();
    });
});
