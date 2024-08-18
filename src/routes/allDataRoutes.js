const express = require('express');
const { getAllData } = require('../controllers/allDataController');

const router = express.Router();

router.get('/all-data', getAllData);

module.exports = router;
