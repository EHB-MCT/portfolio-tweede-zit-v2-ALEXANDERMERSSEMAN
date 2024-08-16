// src/routes/allDataRoutes.js
const express = require('express');
const { getAllData } = require('../controllers/allDataController');

const router = express.Router();

// Definieer de route voor het ophalen van alle data
router.get('/all-data', getAllData);

module.exports = router;
