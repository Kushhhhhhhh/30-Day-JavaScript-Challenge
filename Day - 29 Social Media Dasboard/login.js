document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        // Store the user in sessionStorage
        sessionStorage.setItem('loggedInUser', JSON.stringify({ username: username }));

        // Show success message
        document.getElementById('message').textContent = "Login successful!";
        document.getElementById('message').style.color = "green";

        // Redirect to index.html after a short delay
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        // Show error message
        document.getElementById('message').textContent = "Invalid username or password!";
        document.getElementById('message').style.color = "red";
    }
});