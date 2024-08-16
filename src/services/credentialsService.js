// src/services/credentialsService.js
const credentialsModel = require('../models/credentialsModel');

async function getAllCredentials() {
  return credentialsModel.getAllCredentials();
}

async function createTeacher(name, password) {
  if (!name || !password) {
    throw new Error('Name and password are required.');
  }
  return credentialsModel.addTeacher(name, password);
}

async function createStudent(name, password) {
  if (!name || !password) {
    throw new Error('Name and password are required.');
  }
  return credentialsModel.addStudent(name, password);
}

module.exports = {
  getAllCredentials,
  createTeacher,
  createStudent
};
