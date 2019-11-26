const Mongoose= require ("mongoose");

const CarroSchema = Mongoose.Schema({
    total: Number
});

module.exports = Mongoose.model("carro", CarroSchema);

const AgregaSchema = Mongoose.Schema({
    precioActual: String,
    cnatidad: Number,
    produto:[
        {type: Schema.Types.ObjectId, ref: 'producto'}
      ],
      carrito:[
        {type: Schema.Types.ObjectId, ref: 'carro'}
      ],
      cliente:[
        {type: Schema.Types.ObjectId, ref: 'cliente'}
      ]    
});

module.exports = Mongoose.model("agrega", AgregaSchema);
