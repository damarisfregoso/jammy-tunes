const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn')
const playlistCtrl = require('../controller/playlists');


// GET /playlists/new
router.get('/', playlistCtrl.index);
//GET /playlists/new
router.get('/new', ensureLoggedIn, playlistCtrl.new);
//GET /playlists/all
router.get('/all', playlistCtrl.allPlaylists);

module.exports = router;
