const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/usuario');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
    let user = await User.findById(id);
    done(null,user);
});

passport.use('local-signup',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done)=>{
    let user = await User.findOne({username:username});
    if(user)
    {
        return done(null,false,req.flash('signupMessage','El email ya existe'));
    }
    else{
        let newUser = new User();
        newUser.dui = req.body.dui;
        newUser.username = username;
        newUser.correo = req.body.correo;
        newUser.direccion = req.body.direccion;
        newUser.fecha_nac = req.body.fecha_nac;
        newUser.card = req.body.card;
        newUser.password = newUser.encryptPassword(password);
        newUser.rol = req.body.rol;
        await newUser.save();
        done(null,newUser);
    }
}));

passport.use('local-signin',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done)=>{
    let user = await User.findOne({username:username});
    if(!user)
    {
        return done(null,false,req.flash('signinMessage','El usuario no existe'));
    }
    else{
        if(!user.comparePassword(password))
        {
            return done(null,false,req.flash('signinMessage','Password incorrecto'));
        }
        done(null,user);
    }
}));