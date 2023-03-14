const mongoose = require('mongoose');

const UsuarioScheme = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    plataforma: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario',UsuarioScheme)