// src/routes/credentialsRoutes.js
const express = require('express');
const router = express.Router();
const credentialsController = require('../controllers/credentialsController');

// GET route om alle credentials op te halen
router.get('/credentials', credentialsController.getAllCredentials);

// POST route om een nieuwe leraar toe te voegen
router.post('/teachers', credentialsController.createTeacher);

// POST route om een nieuwe student toe te voegen
router.post('/students', credentialsController.createStudent);

module.exports = router;
