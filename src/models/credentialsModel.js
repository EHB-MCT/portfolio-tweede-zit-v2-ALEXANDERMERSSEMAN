// src/models/credentialsModel.js
const { connectToDatabase } = require('./db');

async function getAllCredentials() {
  const database = await connectToDatabase();
  const collection = database.collection('credentials');
  return collection.find({}).toArray();
}

async function addTeacher(name, password) {
  const database = await connectToDatabase();
  const collection = database.collection('credentials');
  return collection.updateOne(
    { type: 'teachers' },
    { $push: { teachers: { name, password } } },
    { upsert: true }
  );
}

async function addStudent(name, password) {
  const database = await connectToDatabase();
  const collection = database.collection('credentials');
  return collection.updateOne(
    { type: 'students' },
    { $push: { students: { name, password } } },
    { upsert: true }
  );
}

module.exports = {
  getAllCredentials,
  addTeacher,
  addStudent
};
