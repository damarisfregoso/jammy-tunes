const Playlist = require('../models/playlist');

module.exports = {
  index,
  show, 
  apple,
  new: newApple,
  spotify,
  new: newSpotify,
  // allPlaylists
}

async function index(req, res) {
  const playlists = await Playlist.find({});
  res.render('playlists/index', {title: 'Browse Playlists', playlists});
}

async function show(req, res) {
  const playlist = await Playlist.findById(req.params.id)
  res.render('playlists/show', playlist);
}


function apple(req, res) {
  res.render('playlists/apple', {title: 'Jammy Apple', service: 'Apple'});
}

function newApple(req, res) {
  res.render('playlists/new', {title: 'Create a Playlist', service: 'Apple', errorMsg: ''});
}

function spotify(req, res) {
  res.render('playlists/spotify', {title: 'Jammy Spotify', service: 'Spotify'});
}

function newSpotify(req, res) {
  res.render('playlists/new', {title: 'Create a Playlist', service: 'Spotify', errorMsg: ''});
}
