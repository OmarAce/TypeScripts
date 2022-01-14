var express = require('express');
const { Scores } = require('../models');
const { Users } = require('../models');
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

router.get('/highscores', async function(req, res, next) {
  const scores = await Scores.findAll({
    order: [["score", "DESC"]],
    limit: 10,
  }).then(async function (highscores) {
    const highscoresClean = highscores.map(a => a.get({plain:true}))
    console.log(highscoresClean[0])
    res.render('highscore', {highscores: highscoresClean});
  });
});

//data route
router.get('/api/highscores', async function(req, res) {
 const scores = await Scores.findAll({
    order: [["score", "DESC"]],
    limit: 10,
  }).then(function (highscores) {
    res.json(highscores)
  })
});

router.post("/highscores", async function(req,res){
  console.log("YOUR SESSION", req.session);
  console.log("payload ", req.body)
  //save HS in db here....
  const score = await Scores.create({user_id: req.session.userId, score: Number(req.body.score)})
  //return some feedback to ajax on FE that made the call
})




module.exports = router;
