const Playlist = require('../models/playlist');

module.exports = {
  index,
  myPlaylists,
  new: newPlaylists,
  show, 
  create,
  delete: deletePlaylist
}

async function index(req, res) {
  const query = req.query.playlist;
  const playlists = await Playlist.find({service: req.query.playlist});
  if (query === "apple") {
  title = "Apple Music Playlists";
  service = "apple";
  } else if (query === "spotify") {
    title = "Spotify Playlists";
    service = "spotify";
  }
  res.render('playlists/index', {title: `Jammy ${query}`, playlists, service});
}

async function myPlaylists(req, res) {
  const playlists = await Playlist.find({'user': req.user._id});
  const service = req.query.playlist || 'My Playlists';
  res.render('playlists/index', {title: service, playlists, service});
}

function newPlaylists(req, res) {
  const service = req.params.service;
  res.render('playlists/new', {title: 'Create a Playlist', service, errorMsg: ''});
}

async function show(req, res) {
  const playlist = await Playlist.findById(req.params.id);
  const service = playlist.service;
  res.render('playlists/show', { playlist , service });
}

async function create(req, res) {
  const playlist = new Playlist(req.body); 
  playlist.user = req.user._id;
  try {
    await playlist.save();
    res.redirect(`/playlists/${playlist._id}`);
  } catch (err) {
    console.log(err); 
    res.redirect('/playlists/new');
    }
  }

async function deletePlaylist(req, res) {
  await Playlist.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.redirect('/');
}
