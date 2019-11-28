var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport') // libreria para el manejo de la autenticacion
const session = require('express-session'); // libreria para el manejo de sesiones
const flash = require('connect-flash');

require('./passport/local-auth');

var indexRouter = require('./routes/index');
var tareasRouter = require('./routes/tareas')

var app = express();
//abriendo la conexion a mongodb
require('./config/databases');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({     
  secret: 'hola mundo',     
  resave: false,     
  saveUninitialized: false 
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
  app.locals.signupMessage= req.flash('signupMessage');
  app.locals.signinMessage= req.flash('signinMessage');     
  app.locals.user = req.user;     
  next(); 
})

app.use('/', indexRouter);
app.use('/tareas',tareasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
