const mongoose = require('mongoose');

const battleplayerSchema = new mongoose.Schema({
  battlelog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'battlelog',
    required: true,
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'player',
    required: true,
  },
  brawlerId: {
    type: Number,
    required: true,
  },
  brawlerName: {
    type: String,
    required: true,
  },
  brawlerTrophies: {
    type: Number,
    required: true,
  },
  brawlerPower: {
    type: Number,
    required: true,
  },
  result: {
    type: String
  },
  trophyChange: {
    type: Number
  }
});

const battlePlayer = mongoose.model('battlePlayer', battleplayerSchema);

module.exports = battlePlayer;