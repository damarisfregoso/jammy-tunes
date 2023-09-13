const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /playlists/:id/songs
router.post('/playlists/:id/songs', ensureLoggedIn, songsCtrl.create);


module.exports = router;