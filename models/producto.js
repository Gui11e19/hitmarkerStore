const Mongoose= require ("mongoose");

const ProductoSchema = Mongoose.Schema({
    nombre: String,
    precio: Number,
    Desarrolladora: String,
    fecha_publicacion: Date,
    consola: String,
    clasificacion: String
});

module.exports = Mongoose.model("producto", ProductoSchema);
