const Playlist = require('../models/playlist');

module.exports = {
  new: newPlaylist
}

function newPlaylist(req, res) {
  res.render('playlists/apples/new', {title: 'Create a Playlist', errorMsg: ''});
}