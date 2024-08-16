// src/controllers/allDataController.js
const credentialsService = require('../services/credentialsService');
const studentQuestionsService = require('../services/studentQuestionsService');

const getAllData = async (req, res) => {
  try {
    // Haal alle studentenvragen op
    const questions = await studentQuestionsService.getAllQuestions();
    
    // Haal alle credentials op
    const credentials = await credentialsService.getAllCredentials();
    
    // Combineer de data
    res.json({ questions, credentials });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllData,
};
