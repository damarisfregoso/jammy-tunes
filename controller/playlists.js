const Playlist = require('../models/playlist');

module.exports = {
  index,
  allPlaylists
}

async function index(req, res) {
  const playlists = await Playlist.find({});
  res.render('playlists/index', {title: 'Browse Playlists', playlists});
}

async function allPlaylists(req, res) {
  // Make the query object to use with Book.find based upon
  // if the user has submitted via a search form for a book name
  // let playlistQuery = req.query.name 
  const playlists = await Playlist.find(playlistQuery);
  // Why not reuse the books/index template?
  res.render('/playlists/index', {
    playlists
  });
}