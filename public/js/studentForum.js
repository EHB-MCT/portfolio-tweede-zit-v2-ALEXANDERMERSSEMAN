document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionForm');
    const messageDiv = document.getElementById('message');
    const questionsList = document.getElementById('questionsList');
    const anonymousCheckbox = document.getElementById('anonymous');

    // Function to fetch and display questions
    async function fetchQuestions() {
        try {
            const response = await fetch('/api/student-questions', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const questions = await response.json();
            questionsList.innerHTML = ''; // Clear existing questions

            questions.forEach(question => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-item';
                questionDiv.innerHTML = `
                    <p><strong>${question.name}</strong></p>
                    <p>${question.question}</p>
                    <div>
                        ${question.answers && question.answers.length > 0 ? question.answers.map(answer => `
                            <div>
                                <p><strong>${answer.name}</strong>: ${answer.answer}</p>
                            </div>
                        `).join('') : '<p>No answers yet.</p>'}
                    </div>
                    <form class="answerForm">
                        <input type="text" name="answer" placeholder="Your answer..." required>
                        <button type="submit">Submit Answer</button>
                        <input type="hidden" name="questionId" value="${question._id}">
                    </form>
                    <hr>
                `;
                questionsList.appendChild(questionDiv);

                // Add event listener for each answer form
                const answerForm = questionDiv.querySelector('.answerForm');
                answerForm.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const formData = new FormData(answerForm);
                    const answer = formData.get('answer');
                    const questionId = formData.get('questionId');

                    try {
                        const response = await fetch('/api/student-questions/answer', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ questionId, answer, name: localStorage.getItem('username') || 'Anonymous' }),
                        });

                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }

                        // Show success message and refresh questions
                        messageDiv.innerText = 'Answer posted successfully.';
                        fetchQuestions(); // Refresh the list of questions after submitting the answer
                    } catch (error) {
                        console.error('Error:', error);
                        messageDiv.innerText = 'An error occurred. Please try again later.';
                    }
                });
            });

        } catch (error) {
            console.error('Error:', error);
            messageDiv.innerText = 'An error occurred. Please try again later.';
        }
    }

    // Fetch questions when page loads
    fetchQuestions();

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

            // Refresh the list of questions
            fetchQuestions();

        } catch (error) {
            console.error('Error:', error);
            messageDiv.innerText = 'An error occurred. Please try again later.';
        }
    });
});
