document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (validateCredentials(username, password)) {
        alert('Login successful!');
        // Here you can redirect to another page or handle the successful login
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

function validateCredentials(username, password) {
    // For demo purposes, let's use a hardcoded username and password
    const validUsername = 'user';
    const validPassword = 'password123';

    return username === validUsername && password === validPassword;
}
