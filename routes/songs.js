const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /playlists/:id/songs
router.post('/playlists/:id/songs', ensureLoggedIn, songsCtrl.create);
//DELETE /songs/:id 
router.delete('/songs/:id', ensureLoggedIn, songsCtrl.delete);

module.exports = router;