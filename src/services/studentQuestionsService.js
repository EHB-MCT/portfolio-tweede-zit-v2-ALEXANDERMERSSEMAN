// services/studentQuestionsService.js
const { getStudentQuestionsCollection } = require('../models/studentQuestions');

async function addQuestion(name, question) {
  const collection = await getStudentQuestionsCollection();
  const result = await collection.insertOne({ name, question, date: new Date() });
  return result;
}

async function getAllQuestions() {
  const collection = await getStudentQuestionsCollection();
  return await collection.find({}).toArray();
}

module.exports = { addQuestion, getAllQuestions };
