// controllers/studentQuestionsController.js
const { addQuestion, getAllQuestions, addAnswer } = require('../services/studentQuestionsService');

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

async function postAnswer(req, res) {
  try {
    const { questionId, answer, name } = req.body;
    if (!answer) {
      return res.status(400).send('Answer is required.');
    }

    const actualName = name || 'Anonymous';
    await addAnswer(questionId, { name: actualName, answer, date: new Date() });
    res.status(201).send('Answer posted.');
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { postQuestion, getQuestions, postAnswer };
