// controllers/studentQuestionsController.js
const { addQuestion, getAllQuestions } = require('../services/studentQuestionsService');

async function postQuestion(req, res) {
  try {
    const { name, question } = req.body;
    if (!question) {
      return res.status(400).send('Question is required.');
    }

    const actualName = name || 'Anonymous';
    await addQuestion(actualName, question);
    res.status(201).send('Question posted.');
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getQuestions(req, res) {
  try {
    const questions = await getAllQuestions();
    res.json(questions);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { postQuestion, getQuestions };
