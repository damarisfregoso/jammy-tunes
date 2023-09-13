const Playlist = require('../models/playlist');

module.exports = {
  index,
  myPlaylists,
  new: newPlaylists,
  show, 
  create
}

async function index(req, res) {
  console.log('hi');
  const playlists = await Playlist.find({});
  const service = req.query.playlist || 'Playlists';
  res.render('playlists/index', {title: `Jammy ${service}`, playlists, service});
}

async function myPlaylists(req, res) {
  console.log('hi');
  const playlists = await Playlist.find({'user': req.user._id});
  console.log('hello', playlists)
  const service = req.query.playlist || 'My Playlists';
  res.render('playlists/index', {title: service, playlists, service});
}

function newPlaylists(req, res) {
  const service = req.params.service;
  res.render('playlists/new', {title: 'Create a Playlist', service, errorMsg: ''});
}

async function show(req, res) {
  const playlist = await Playlist.findById(req.params.id)
  const service = playlist.service;
  res.render('playlists/show', { playlist , service });
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

