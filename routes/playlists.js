const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn')
const playlistCtrl = require('../controller/playlists');


// GET /playlists/new
router.get('/', playlistCtrl.index);
//GET /playlists/new
router.get('/:service/new', ensureLoggedIn, playlistCtrl.new);
// router.get('/spotify/new', ensureLoggedIn, playlistCtrl.new);
//GET /playlists/:id
router.get('/:id', playlistCtrl.show);
//GET /playlists/all
// router.get('/all', playlistCtrl.allPlaylists);


module.exports = router;