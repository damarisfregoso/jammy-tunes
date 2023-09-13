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
    // Save any changes made to the movie doc
    await playlist.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/playlists/${playlist._id}`);
}