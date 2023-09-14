const Playlist = require('../models/playlist');

module.exports = {
  create, 
  delete: deleteSong
};

async function create(req, res) {
  const playlist = await Playlist.findById(req.params.id); 
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  playlist.songs.push(req.body);
  try {
    await playlist.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/playlists/${playlist._id}`);
}

async function deleteSong(req, res) {
  const playlist = await Playlist.findOne({ 'songs._id': req.params.id, 'songs.user': req.user._id});
  if(!playlist) return res.redirect(`/playlists`);
  playlist.songs.remove(req.params.id);
  await playlist.save();
  res.redirect(`/playlists/${playlist._id}`);
}