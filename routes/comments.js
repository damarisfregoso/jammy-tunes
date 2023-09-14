const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/playlists/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);
router.put('/comments/:id', commentsCtrl.update);

module.exports = router;