document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionForm');
    const messageDiv = document.getElementById('message');
    const anonymousCheckbox = document.getElementById('anonymous');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const questionInput = document.getElementById('question');
        const question = questionInput.value;
        const isAnonymous = anonymousCheckbox.checked;

        if (!question) {
            messageDiv.innerText = 'Please enter a question.';
            return;
        }

        // Get the username from local storage if not posting anonymously
        const username = isAnonymous ? 'Anonymous' : localStorage.getItem('username');

        try {
            const response = await fetch('/api/student-questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: username, question }),
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
