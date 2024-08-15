const express = require('express');
const router = express.Router();
const Credential = require('../models/credential');

// POST request to add a new credential
router.post('/credentials', async (req, res) => {
  const { name, password, role } = req.body;
  try {
    const newCredential = new Credential({ name, password, role });
    await newCredential.save();
    res.status(201).send(newCredential);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET request to get all credentials
router.get('/credentials', async (req, res) => {
  try {
    const credentials = await Credential.find();
    res.status(200).send(credentials);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
