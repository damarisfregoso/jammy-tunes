const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn')
const playlistCtrl = require('../controllers/playlists');


// GET /playlists/new
router.get('/', ensureLoggedIn, playlistCtrl.index);
router.get('/mine', ensureLoggedIn, playlistCtrl.myPlaylists);
//GET /playlists/new
router.get('/:service/new', ensureLoggedIn, playlistCtrl.new);
//POST /playlists
router.post('/', ensureLoggedIn, playlistCtrl.create);
//GET /playlists/:id
router.get('/:id', playlistCtrl.show);

module.exports = router;