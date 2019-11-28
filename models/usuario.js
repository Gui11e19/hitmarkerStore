const Mongoose= require ("mongoose");
const bcrypt = require('bcrypt-nodejs'); // encriptar password


const UserRegisterSchema = Mongoose.Schema({
    dui: String,
    username: String,
    correo: String,
    direccion: String,
    fecha_nac: Date,
    card: String,
    password: String,
    rol: String 
});

UserRegisterSchema.methods.encryptPassword = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
};
//desencriptar password
UserRegisterSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
};

module.exports = Mongoose.model("usuario", UserRegisterSchema);


/*
const AdminSchema = Mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String,
    rol: String
});

module.exports = Mongoose.model("administrador", AdminSchema);

const ClienteSchema = Mongoose.Schema({
    username: String,
    contraseña: String,
    email: String,
    fecha_nacimiento: String,
    dirreccion: String,
    nacionalidad: String,
    rol: String
});


module.exports = Mongoose.model("cliente", ClienteSchema);
*/