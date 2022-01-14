var express = require('express');
const { Scores } = require('../models');
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
    // res.render('highscore', {
    //   scores: highscores,
    //   user: user_id,
    // })
    const highscoresClean = highscores.map(a => a.get({plain:true}))
    res.render('highscore', {highscores: highscoresClean});
  )
});

router.get('/api/highscores', async function(req, res) {
 const scores = await Scores.findAll({
    order: [["score", "DESC"]],
    limit: 10,
  }).then(function (highscores) {
    // res.render('highscore', {
    //   scores: highscores,
    //   user: user_id,
    // })
    res.json(highscores)
  })
  // res.render('highscores', { title: 'Highscores' });
});

router.post("/highscores", async function(req,res){
  console.log("YOUR SESSION", req.session);
  console.log("payload ", req.body)
  //save HS in db here....
  const score = await Scores.create({user_id: req.session.userId, score: Number(req.body.score)})
  //return some feedback to ajax on FE that made the call
})




module.exports = router;
