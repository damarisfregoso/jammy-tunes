const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  service: {
    type: String,
  }
});

module.exports = mongoose.model('Playlist', playlistSchema);