/*Contiene los string de conexion a la base de datos */
module.exports = {
    mongodb:{
        //URI:'mongodb://localhost:27017/admTareas'
        //URI:'mongodb+srv://admin2:1234@hitmarker-mdyyg.mongodb.net/admTareas'
        URI:"mongodb://admin2:1234@hitmarker-shard-00-00-mdyyg.mongodb.net:27017,hitmarker-shard-00-01-mdyyg.mongodb.net:27017,hitmarker-shard-00-02-mdyyg.mongodb.net:27017/test?ssl=true&replicaSet=hitmarker-shard-0&authSource=admin&retryWrites=true&w=majority"
    }
}