const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/playlists/:id/songs', ensureLoggedIn, songsCtrl.create);
router.delete('/songs/:id', ensureLoggedIn, songsCtrl.delete);

module.exports = router;