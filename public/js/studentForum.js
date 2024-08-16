document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const questionInput = document.getElementById('question');
        const question = questionInput.value;
        const name = localStorage.getItem('username');  // Haal naam op uit localStorage

        if (!name || !question) {
            messageDiv.innerText = 'Name and question are required.';
            return;
        }

        try {
            const response = await fetch('/api/student-questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, question }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            messageDiv.innerText = 'Question posted successfully.';
            questionInput.value = '';  // Clear the input field after posting
        } catch (error) {
            console.error('Error:', error);
            messageDiv.innerText = 'An error occurred. Please try again later.';
        }
    });
});
