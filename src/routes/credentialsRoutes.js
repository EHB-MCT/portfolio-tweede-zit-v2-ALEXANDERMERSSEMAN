const express = require('express');
const router = express.Router();
const credentialsController = require('../controllers/credentialsController');

router.get('/credentials', credentialsController.getAllCredentials);

router.post('/teachers', credentialsController.createTeacher);

router.post('/students', credentialsController.createStudent);

module.exports = router;
