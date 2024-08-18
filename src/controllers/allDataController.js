const credentialsService = require('../services/credentialsService');
const studentQuestionsService = require('../services/studentQuestionsService');

const getAllData = async (req, res) => {
  try {
    const questions = await studentQuestionsService.getAllQuestions();
    
    const credentials = await credentialsService.getAllCredentials();
    
    res.json({ questions, credentials });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllData,
};
