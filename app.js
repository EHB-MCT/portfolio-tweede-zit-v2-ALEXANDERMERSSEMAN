const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2601;

// Voeg de routers toe
const studentQuestionsRoutes = require('./src/routes/studentQuestionsRoutes');
const credentialsRoutes = require('./src/routes/credentialsRoutes');
const allDataRoutes = require('./src/routes/allDataRoutes');  // Nieuwe all-data route

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Voeg de nieuwe routes toe
app.use('/api', studentQuestionsRoutes);
app.use('/api', credentialsRoutes);
app.use('/api', allDataRoutes);  // Gebruik de nieuwe all-data route

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
