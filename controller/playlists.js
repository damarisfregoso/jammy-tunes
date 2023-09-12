const Playlist = require('../models/playlist');

module.exports = {
  index,
  show, 
  new: newPlaylist,
  create
}

async function index(req, res) {
  const playlists = await Playlist.find({});
  const service = req.query.playlist;
  res.render('playlists/index', {title: `Jammy ${service}`, playlists, service});
}

async function show(req, res) {
  const service = req.params.service;
  const playlist = await Playlist.findById(req.params.id)
  res.render('playlists/show', { playlist, service });
}


function newPlaylist(req, res) {
  const service = req.params.service;
  res.render('playlists/new', {title: 'Create a Playlist', service, errorMsg: ''});
}

async function create(req, res) {
  const playlist = new Playlist(req.body); 
  playlist.user = req.user._id;
  try {
    await playlist.save();
    res.redirect(`/playlists/${playlist._id}`)
  } catch (err) {
    console.log(err) 
    res.redirect('/playlists/new')
    }
  }

