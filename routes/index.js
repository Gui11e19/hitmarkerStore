var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/error', function(req, res) {
  res.render('error');
});

router.get('/articulos', function(req, res) {
  res.render('articulos');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/carro', function(req, res) {
  res.render('carro');
});

router.get('/help', function(req, res) {
  res.render('help');
});

router.get('/index', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/perfil', function(req, res) {
  res.render('perfil');
});

router.get('/producto', function(req, res) {
  res.render('producto');
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.get('/reset_pass', function(req, res) {
  res.render('reset_pass');
});
router.get('/home1', function(req, res) {
  res.render('home1');
});


module.exports = router;
