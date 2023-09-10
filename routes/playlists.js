const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn')
const playlistCtrl = require('../controller/playlists');
const appleCtrl = require('../controller/apples');
const spotifyCtrl = require('../controller/spotifys');



// GET /playlists/new
router.get('/', playlistCtrl.index);
//GET /playlists/new
router.get('/playlists/apples/new', ensureLoggedIn, appleCtrl.new);
router.get('/playlists/spotifys/new', ensureLoggedIn, spotifyCtrl.new);
//GET /playlists/all
router.get('/all', playlistCtrl.allPlaylists);

module.exports = router;
