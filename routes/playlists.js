const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn')
const playlistCtrl = require('../controllers/playlists');


router.get('/', ensureLoggedIn, playlistCtrl.index);
router.get('/mine', ensureLoggedIn, playlistCtrl.myPlaylists);
router.get('/:service/new', ensureLoggedIn, playlistCtrl.new);
router.post('/', ensureLoggedIn, playlistCtrl.create);
router.get('/:id', playlistCtrl.show);
router.delete('/:id', playlistCtrl.delete);

module.exports = router;