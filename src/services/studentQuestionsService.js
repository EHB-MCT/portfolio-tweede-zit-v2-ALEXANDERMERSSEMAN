// services/studentQuestionsService.js
const { ObjectId } = require('mongodb');
const { getStudentQuestionsCollection } = require('../models/studentQuestions');

async function addQuestion(name, question) {
  const collection = await getStudentQuestionsCollection();
  const result = await collection.insertOne({ name, question, date: new Date(), answers: [] });
  return result;
}

async function getAllQuestions() {
  const collection = await getStudentQuestionsCollection();
  return await collection.find({}).toArray();
}

// Voeg een antwoord toe aan een vraag
async function addAnswer(questionId, answerData) {
  const collection = await getStudentQuestionsCollection();
  const result = await collection.updateOne(
      { _id: new ObjectId(questionId) }, // Zorg ervoor dat ObjectId wordt gebruikt
      { $push: { answers: answerData } }
  );
  return result;
}

module.exports = { addQuestion, getAllQuestions, addAnswer };