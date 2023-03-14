const express = require('express');
// const dbConnection = require('./config/db');
const cors = require("cors");

//Creamos el servidor
const app = express();

//Conectamos a la BD
// dbConnection();
// app.use(cors());

//habilitar manejo de json
// app.use(express.json());

//Definición de ruta principal
// app.get('/', (req,res) =>{
//     res.send('Hola Mundo!!');
// });
app.use('/api/usuarios',require('./routes/usuarios'));

app.listen(4000,()=>{
    console.log('Servidor corriendo en puerto: ', 4000);    
});