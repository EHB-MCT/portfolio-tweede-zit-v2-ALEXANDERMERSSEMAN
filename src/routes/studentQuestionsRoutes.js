// routes/studentQuestionsRoutes.js
const express = require('express');
const { postQuestion, getQuestions } = require('../controllers/studentQuestionsController');

const router = express.Router();

router.post('/student-questions', postQuestion);
router.get('/student-questions', getQuestions);

module.exports = router;
