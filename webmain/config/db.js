const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const dbConnection = async()=>{
    // console.log('process.env.DB_MONGO: ', process.env.DB_MONGO);    
    try {       
        await mongoose.connect(process.env.DB_MONGO);
        console.log('Base de datos online');        
    } catch (error) {
        throw new Error(`Error al iniciar la base de datos: ${error}`);
    }
    console.log('Base de datos online');        
}

module.exports = dbConnection