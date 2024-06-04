document.addEventListener('DOMContentLoaded', () => {
    // Personalized welcome message
    const userName = 'Harfi'; // This should be dynamically set
    document.getElementById('user-name').innerText = userName;

    // Form validation and display message
    const form = document.getElementById('message-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;

        const displayDiv = document.getElementById('message-display');
        displayDiv.innerHTML = `
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${dob}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Pesan: ${message}</p>
        `;
    });
});
