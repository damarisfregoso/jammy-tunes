const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  song: {
    type: String,
    required: true
  }, 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, 
  userName: String
});

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  service: {
    type: String,
    enum: ['apple', 'spotify']
  }, 
  songlinks: [songSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Playlist', playlistSchema);