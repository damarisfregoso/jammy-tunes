const Playlist = require('../models/playlist');

module.exports = {
  index,
  new: newPlaylist
}

async function index(req, res) {
  const playlists = await Playlist.find({});
  res.render('playlists/index', {title: 'Browse Playlists', playlists});
}

function newPlaylist(req, res) {
  res.render('playlists/new', {title: 'Create a Playlist', errorMsg: ''});
}