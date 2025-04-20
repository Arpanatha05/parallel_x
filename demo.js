
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation
  if (username  && password) {
    alert('Login Successful!'); // Replace with actual sign-up logic
    // Here you can add code to send data to the server
    window.location.href = './main.html';

} else {
    alert('Please fill in all fields.');
    document.querySelector('signup-link').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission
      window.location.href = './main.html';
    }
    );
}

  
} 
);

