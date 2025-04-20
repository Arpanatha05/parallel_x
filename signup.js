document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

    // Simple validation
    if (name  && password) {
        alert('Sign Up Successful!'); // Replace with actual sign-up logic
        // Here you can add code to send data to the server
    } else {
        alert('Please fill in all fields.');
    }
});

// Add event listener for the login link
document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = './index.html'; // Redirect to the login page
});