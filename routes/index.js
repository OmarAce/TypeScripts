var express = require('express');
var router = express.Router();

router.get('/login', async function(req, res) {
  res.render('login', { loggedIn: req.session.loggedIn })
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
