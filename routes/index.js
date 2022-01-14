var express = require('express');
var router = express.Router();

router.get('/login', async function(req, res) {
  res.render('login', { loggedIn: req.session.loggedIn })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'TypeScript' });
});

router.get('/game', function(req, res, next) {
  res.render('game', { prompt: 'prompt goes here(from db)'});
});

router.get('/highscores', function(req, res, next) {
  res.render('highscores', { title: 'Highscores' });
});




module.exports = router;
