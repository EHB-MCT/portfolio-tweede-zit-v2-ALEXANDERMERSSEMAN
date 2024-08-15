const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['teacher', 'student'], required: true },
});

module.exports = mongoose.model('Credential', credentialSchema);
