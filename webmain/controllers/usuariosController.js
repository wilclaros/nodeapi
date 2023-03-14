const Usuario = require("../models/Usuarios");

exports.obtenerUsuarios = async(req, res)=>{

    usuarios = [
        {
          "_id": "63fcfa8723a0227c940f46f2",
          "nombre": "WILLIAM CLAROS",
          "area": "AREAUNO",
          "plataforma": "PRUEBA",
          "edad": 25,
          "fechaCreacion": "2023-02-27T18:37:01.701Z",
          "__v": 0
        },
        {
          "_id": "63fcfa983835cc46e6059814",
          "nombre": "JUAN PEREZ",
          "area": "AREADOS",
          "plataforma": "PRUEBA",
          "edad": 25,
          "fechaCreacion": "2023-02-27T18:46:44.959Z",
          "__v": 0
        }
      ];
    try{
        // const usuarios = await Usuario.find();
        res.json(usuarios);

    }catch(error){
        console.log(error);
        res.status(500).send('Error al crear usuario');
    }
};
