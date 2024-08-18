const { addQuestion, getAllQuestions, addAnswer, deleteQuestionById } = require('../services/studentQuestionsService');

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
    const result = await addAnswer(questionId, { name: actualName, answer, date: new Date() });
    
    if (result.modifiedCount === 1) {
      res.status(201).send('Answer posted.');
    } else {
      res.status(404).send('Question not found.');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function deleteQuestion(req, res) {
  try {
    const questionId = req.params.id;
    const result = await deleteQuestionById(questionId);

    if (result.deletedCount === 1) {
      res.status(200).send('Question deleted.');
    } else {
      res.status(404).send('Question not found.');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { postQuestion, getQuestions, postAnswer, deleteQuestion };
