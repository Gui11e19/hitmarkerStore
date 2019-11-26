var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/error', function(req, res) {
  res.render('error');
});


module.exports = router;
