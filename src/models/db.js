const { MongoClient } = require('mongodb');

const uri = 'mongodb://db:27017';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    return client.db('school');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

module.exports = { connectToDatabase };
