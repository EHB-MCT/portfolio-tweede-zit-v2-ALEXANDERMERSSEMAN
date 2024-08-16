// routes/studentQuestionsRoutes.js
const express = require('express');
const { postQuestion, getQuestions, postAnswer } = require('../controllers/studentQuestionsController');

const router = express.Router();

router.post('/student-questions', postQuestion);
router.get('/student-questions', getQuestions);
router.post('/student-questions/answer', postAnswer); // Voeg deze route toe

module.exports = router;
