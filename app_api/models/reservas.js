var mongoose = require('mongoose');

var reservasSchema = new mongoose.Schema({
    dia:{type:String, required:true},
    nombre:{type:String, required:true},
    codigo: {type: String, required: true},
    email: String,
    comentarios: String
});

mongoose.model('reservas', reservasSchema, 'reservas');