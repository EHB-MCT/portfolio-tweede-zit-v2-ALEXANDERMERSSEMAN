// app.js
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = process.env.PORT || 2601;

const uri = 'mongodb://db:27017';  // 'db' is de naam van de MongoDB service in docker-compose
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');
    const documents = await collection.find({}).toArray();
    res.json(documents);
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
