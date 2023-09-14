const Playlist = require('../models/playlist');

module.exports = {
  create,
  delete: deleteComment,
  update
};

async function create(req, res) {
  const playlist = await Playlist.findById(req.params.id); 
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  playlist.comments.push(req.body);
  try {
    await playlist.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/playlists/${playlist._id}`);
}

async function deleteComment(req, res) {
  const playlist = await Playlist.findOne({ 'comments._id': req.params.id, 'comments.user': req.user});
  if(!playlist) return res.redirect(`/playlists`);
  playlist.comments.remove(req.params.id);
  await playlist.save();
  res.redirect(`/playlists/${playlist._id}`);
}

async function update(req, res) {
  const playlist = await Playlist.findOne({'comments._id': req.params.id});
  const commentSubdoc = playlist.comments.id(req.params.id);
  if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/playlists/${playlist._id}`);
  commentSubdoc.comment = req.body.comment;
  try {
    await playlist.save();
  } catch (e) {
    console.log(e.message);
  }
  res.redirect(`/playlists/${playlist._id}`);
}