const Usuario= require("../models/usuario")

const insert = (req, res)=>{

    if(!req.body.dui || !req.body.nombre || !req.body.correo || !req.body.direccion || !req.body.fecha_nac || !req.body.contraseña){
        return res.status(400).json({
            message: "There are missing fields",
        });
    }
    
    let usuario = new Usuario(
        req.body
    );

    usuario.fecha_nac = new Date();

    usuario.save((err, nUsuario)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to insert Register",
        });

        res.status(200).json({
            message: "Insert registration was successful",
            register: nUsuario
        });
    })
}

const update = (req, res)=>{
    let usuario = req.body
    
    //console.log(register.dui);
    

    if(!register._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Register.update({_id: usuario.nombre_usuario}, register)
        .then(value =>{
            res.status(200).json({
                message: "update register was successful"
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Something happend trying to update the Register"
            });
        })

}

const deleteById = (req, res)=>{
    let usuario = req.body;

    if(!usuario.nombre_usuario){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Register.deleteOne({_id:usuario.nombre_usuario})
        .then(deleted=>{
            res.status(200).json({
                message: "delete register was successful"
            });
        })
        .catch(err=>{
            res.status(500).json({
                message: "Something happend trying to delete the Register"
            });
        })
}

/**
 * METHOD = GET
 */
const getAll = (req, res)=>{
    Usuario.find((err, registers)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get the Register",
        });

        if(registers){
            res.status(200).json(registers);
        }else{
            res.status(404).json({
                message: "There isn't any register",
            });
        }
    });
}

/**
 * METHOD = GET
 * Params -> id
 */
const getOneById = (req, res)=>{
    let id = req.params.id; 

    Register.findById(id, (err, usuario)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get all Registers",
        });

        if(usuario){
            res.status(200).json(usuario);
        }else{
            res.status(404).json({
                message: `There is not a register with id ${id}`,
            });
        }
    });  
}

const panic = (req, res)=>{
    Usuario.deleteMany({}, (err)=>{
        res.status(200).send("F en el chat");
    });
}

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById,
    panic,
}