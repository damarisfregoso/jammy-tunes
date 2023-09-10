const Playlist = require('../models/playlist');

module.exports = {
  new: newPlaylist
}

function newPlaylist(req, res) {
  res.render('playlists/spotifys/new', {title: 'Create a Playlist', errorMsg: ''});
}