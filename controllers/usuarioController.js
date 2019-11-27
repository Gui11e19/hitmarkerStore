const User = require('../models/usuario');
const usuarioController = {};

//mostrar todos los usuarios
usuarioController.index = async function (req, res, next) {
    //extrallendo a todos los usuarios
    let users = await User.find();
    return res.status(200).json(users);
}

//buscar usuario
usuarioController.findUser = async function (req, res, next) {
    let { username } = req.params;
    let user = await User.findOne(username).catch(err => {
        return next(res);
    });
    return res.status(200).json(user);
}
//crear usuario
userController.store = async function (req, res, next) {
    let user = new User();
    user.username = req.body.user;
    user.password = user.encryptPassword(req.body.password);
    user.rol = req.body.rol;

    try {
        await user.save();
        return res.status(200).json({ "message": "Usuario agregado con exito" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }
}

//modificar usuario
userController.update = async function (req, res, next) {
    let { username } = req.params;
    let user = {
        userName: req.body.user,
        rol: req.body.rol
    }
    console.log(user);
    try {
        await User.update({ username: username }, user);
        res.status(200).json({ "message": "Usuario actualizado con exito" });
    }
    catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }
}

//eliminar usuario
userController.delete = async function (req, res, next) {
    let { username } = req.params;
    await User.remove({ username: username });
    res.status(200).json({ "message": "Usuario Eliminado con exito" });
}


module.exports = userController;