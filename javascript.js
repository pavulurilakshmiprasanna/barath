document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        console.log(data);
        // Handle response from server, e.g., show a success message or redirect to another page.
    } catch (error) {
        console.error('Error:', error);
        // Handle errors, e.g., show an error message to the user.
    }
});