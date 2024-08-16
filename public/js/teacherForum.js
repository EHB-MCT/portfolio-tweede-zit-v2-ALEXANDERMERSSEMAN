document.addEventListener('DOMContentLoaded', () => {
    const questionsList = document.getElementById('questionsList');
    const messageDiv = document.createElement('div');
    questionsList.appendChild(messageDiv);

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
            console.log('Fetched questions:', questions); // Debugging statement
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
                    <hr>
                `;
                questionsList.appendChild(questionDiv);
            });

        } catch (error) {
            console.error('Error:', error);
            messageDiv.innerText = 'An error occurred. Please try again later.';
        }
    }

    // Fetch questions when page loads
    fetchQuestions();
});
