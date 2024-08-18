const credentialsService = require('../services/credentialsService');

async function getAllCredentials(req, res) {
  try {
    const credentials = await credentialsService.getAllCredentials();
    res.json(credentials);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function createTeacher(req, res) {
  try {
    const { name, password } = req.body;
    await credentialsService.createTeacher(name, password);
    res.status(201).send('Teacher added.');
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function createStudent(req, res) {
  try {
    const { name, password } = req.body;
    await credentialsService.createStudent(name, password);
    res.status(201).send('Student added.');
  } catch (err) {
    res.status(400).send(err.message);
  }
}

module.exports = {
  getAllCredentials,
  createTeacher,
  createStudent
};
