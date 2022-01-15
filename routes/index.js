// Dependencies
var express = require('express');
const { Scores } = require('../models');
const { User } = require('../models');
var router = express.Router();

// Session Tracker
router.get('/login', async function (req, res) {
  res.render('login', { loggedIn: req.session.loggedIn })
})

// Home Page Route
router.get('/', function (req, res, next) {
  res.render('homepage');
});

// Game Route
router.get('/game', function (req, res, next) {
  res.render('game');
});

// High Score Route
router.get('/highscores', async function (req, res, next) {
  const scores = await Scores.findAll({
    order: [["score", "DESC"]],
    include: [{ model: User }],
    limit: 10,
  }).then(async function (highscores) {
    const highscoresClean = highscores.map(a => a.get({ plain: true }))
    console.log(highscoresClean)
    res.render('highscore', { highscores: highscoresClean });
  });
});

//data route for scores
router.get('/api/highscores', async function (req, res) {
  const scores = await Scores.findAll({
    order: [["score", "DESC"]],
    limit: 10,
  }).then(function (highscores) {
    res.json(highscores)
  })
});

// Method to Write to Highscores
router.post("/highscores", async function (req, res) {
  console.log("YOUR SESSION", req.session);
  console.log("payload ", req.body)
  //save HS in db here....
  const score = await Scores.create({ user_id: req.session.userId, score: Number(req.body.score) })
  //return some feedback to ajax on FE that made the call
})

// Export
module.exports = router;
