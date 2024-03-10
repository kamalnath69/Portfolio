const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Message', messageSchema);
