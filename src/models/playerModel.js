const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  trophies: {
    type: Number
  }
});

const player = mongoose.model('player', playerSchema);

module.exports = player;