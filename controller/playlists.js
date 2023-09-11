const Playlist = require('../models/playlist');

module.exports = {
  index,
  show, 
  new: newPlaylist,
  // allPlaylists
}

async function index(req, res) {
  const playlists = await Playlist.find({});
  const service = req.query.playlist;
  res.render('playlists/index', {title: `Jammy ${service}`, playlists, service});
}

async function show(req, res) {
  const playlist = await Playlist.findById(req.params.id)
  res.render('playlists/show', playlist);
}


function newPlaylist(req, res) {
  console.log(req.query.playlist);
  const service = req.params.service;
  res.render('playlists/new', {title: 'Create a Playlist', service, errorMsg: ''});
}
