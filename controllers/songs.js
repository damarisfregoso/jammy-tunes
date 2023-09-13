const Playlist = require('../models/playlist');

module.exports = {
  create
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