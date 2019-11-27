const Mongoose= require ("mongoose");
const bcrypt = require('bcrypt-nodejs'); // encriptar password


const UserRegisterSchema = Mongoose.Schema({
    dui: String,
    nombre_usuario: String,
    correo: String,
    direccion: String,
    fecha_nac: Date,
    card: String,
    contraseña: String
});

module.exports = Mongoose.model("usuario", UserRegisterSchema);

const AdminSchema = Mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String
});

module.exports = Mongoose.model("administrador", AdminSchema);

const ClienteSchema = Mongoose.Schema({
    username: String,
    contraseña: String,
    email: String,
    fecha_nacimiento: String,
    dirreccion: String,
    nacionalidad: String
});


module.exports = Mongoose.model("cliente", ClienteSchema);
