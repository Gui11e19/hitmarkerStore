var express = require('express');
var router = express.Router();
const passport = require('passport');


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

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/help', function(req, res) {
  res.render('help');
});


router.get('/Database', function(req, res) {
  res.render('Database');
});


//rutas para registrar a un usuario

router.post('/signup',passport.authenticate('local-signup',{
    successRedirect: '/perfil',
    failureRedirect: '/home',
    passReqToCallback: true
}));

router.post('/signin',passport.authenticate('local-signin',{
    successRedirect: '/perfil',
    failureRedirect: '/home',
    passReqToCallback: true
}));

router.get('/logout',(req,res,next)=>{
    req.logout();
    res.redirect('/home');
});

//middleware
router.use((req,res,next)=>{
    isAuthenticated(req,res,next);
});

router.get('/profile',(req,res,next)=>{
    res.render('profile');
});

router.get('/articulos', function(req, res) {
  res.render('articulos');
});

router.get('/carro', function(req, res) {
  res.render('carro');
});

router.get('/login', function(req, res) {
  res.render('login');
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


function isAuthenticated(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    res.redirect('/');
}


module.exports = router;
