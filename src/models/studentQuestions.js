// models/studentQuestions.js
const { connectToDatabase } = require('./db');

async function getStudentQuestionsCollection() {
  const database = await connectToDatabase();
  return database.collection('student_questions');
}

module.exports = { getStudentQuestionsCollection };