document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/credentials', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const credentials = await response.json();

        // Controleren of de gebruiker een leerkracht of leerling is
        const teacher = credentials.find(user => user.type === 'teachers' && user.teachers.some(t => t.name === name && t.password === password));
        const student = credentials.find(user => user.type === 'students' && user.students.some(s => s.name === name && s.password === password));

        if (teacher) {
            // Sla de naam op in localStorage en redirect
            localStorage.setItem('username', name);
            window.location.href = 'teacherForum.html';  // Redirect naar leerkrachtenforum
        } else if (student) {
            // Sla de naam op in localStorage en redirect
            localStorage.setItem('username', name);
            window.location.href = 'studentForum.html';  // Redirect naar leerlingenforum
        } else {
            document.getElementById('message').innerText = 'Invalid login credentials';
        }

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'An error occurred. Please try again later.';
    }
});
