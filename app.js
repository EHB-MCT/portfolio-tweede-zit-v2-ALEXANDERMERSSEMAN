// app.js
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = process.env.PORT || 2601;

const uri = 'mongodb://db:27017';  // 'db' is de naam van de MongoDB service in docker-compose
const client = new MongoClient(uri);

// Middleware om JSON-body te parseren
app.use(express.json());

// Connectie met MongoDB en ophalen van de database
async function connectToDatabase() {
  try {
    await client.connect();
    return client.db('school'); // Verbeterde naam voor de database
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

// GET request om alle credentials op te halen
app.get('/api/credentials', async (req, res) => {
  try {
    const database = await connectToDatabase();
    const collection = database.collection('credentials');
    const credentials = await collection.find({}).toArray();
    res.json(credentials);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST request om een leerkracht toe te voegen
app.post('/api/teachers', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).send('Name and password are required.');
    }

    const database = await connectToDatabase();
    const collection = database.collection('credentials');
    const result = await collection.updateOne(
      { type: 'teachers' },
      { $push: { teachers: { name, password } } },
      { upsert: true }
    );

    res.status(201).send('Teacher added.');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST request om een leerling toe te voegen
app.post('/api/students', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).send('Name and password are required.');
    }

    const database = await connectToDatabase();
    const collection = database.collection('credentials');
    const result = await collection.updateOne(
      { type: 'students' },
      { $push: { students: { name, password } } },
      { upsert: true }
    );

    res.status(201).send('Student added.');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start de server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
