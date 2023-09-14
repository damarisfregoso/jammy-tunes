var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
  res.render('home', { title: 'Jammy Tunes'});
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));

router.get('/oauth2callback', function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate(
    'google',
    {
      successRedirect: redirectTo || '/',
      failureRedirect: '/'
    }
  )(req, res, next);
});

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
