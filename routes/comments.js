const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const songsCtrl = require('../controllers/songs');
// POST /playlists/:id/songs
router.post('/playlists/:id/comments', ensureLoggedIn, songsCtrl.create);
//DELETE /songs/:id 
// router.delete('/songs/:id', ensureLoggedIn, songsCtrl.delete);

module.exports = router;