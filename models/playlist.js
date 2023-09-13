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
    // required: true
  }, 
  userName: String
});

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true
  }, 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  }, 
  userName: String
}, {
  timestamps: true
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  }, 
  userName: String,
  songs: [songSchema],
  comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Playlist', playlistSchema);