const express = require('express');
const { postQuestion, getQuestions, postAnswer, deleteQuestion } = require('../controllers/studentQuestionsController');

const router = express.Router();

router.post('/student-questions', postQuestion);
router.get('/student-questions', getQuestions);
router.post('/student-questions/answer', postAnswer);
router.delete('/student-questions/:id', deleteQuestion);

module.exports = router;
