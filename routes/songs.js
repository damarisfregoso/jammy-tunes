const express = require('express');
const router = express.Router();
const songsCtrl = ('../controllers/songs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /playlists/:id/songs
router.post('/playlist/:id/songs', ensureLoggedIn, songsCtrl.create);


module.exports = router;