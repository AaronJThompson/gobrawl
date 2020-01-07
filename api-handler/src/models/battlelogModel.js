const mongoose = require('mongoose');

const battlelogSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: true,
  },
  eventId: {
    type: Number,
    required: true,
  },
  mode: {
    type: Number
  },
  type: {
    type: String
  },
  duration: {
    type: Number
  },
  map: {
    type: String
  },
  starPlayer: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'battlePlayer'
  },
  teams: [
    [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'battlePlayer'
      }
    ]
  ]
});

const battlelog = mongoose.model('battlelog', battlelogSchema);

module.exports = battlelog;