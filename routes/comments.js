const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');
// POST /playlists/:id/comments
router.post('/playlists/:id/comments', ensureLoggedIn, commentsCtrl.create);
//DELETE /comments/:id 
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);
//PUT /comments/:id
router.put('/comments/:id', commentsCtrl.update);
module.exports = router;