const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2601;

const studentQuestionsRoutes = require('./src/routes/studentQuestionsRoutes');
const credentialsRoutes = require('./src/routes/credentialsRoutes');
const allDataRoutes = require('./src/routes/allDataRoutes');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', studentQuestionsRoutes);
app.use('/api', credentialsRoutes);
app.use('/api', allDataRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
