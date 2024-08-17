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

async function addAnswer(questionId, answerData) {
  const collection = await getStudentQuestionsCollection();
  const result = await collection.updateOne(
      { _id: new ObjectId(questionId) },
      { $push: { answers: answerData } }
  );
  return result;
}

// Nieuwe functie om een vraag te verwijderen
async function deleteQuestionById(questionId) {
  const collection = await getStudentQuestionsCollection();
  const result = await collection.deleteOne({ _id: new ObjectId(questionId) });
  return result;
}

module.exports = { addQuestion, getAllQuestions, addAnswer, deleteQuestionById };
