var express = require('express');
var router = express.Router();

router.get('/login', async function(req, res) {
  res.render('login', { loggedIn: req.session.loggedIn })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Type{Scripts}' });
});

router.get('/game', function(req, res, next) {
  res.render('game');
});

router.get('/highscores', function(req, res, next) {
  res.render('highscore');
});

router.get('/highscores', function(req, res, next) {
  res.render('highscores', { title: 'Highscores' });
});




module.exports = router;
