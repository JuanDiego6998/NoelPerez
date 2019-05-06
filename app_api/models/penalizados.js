var mongoose = require('mongoose');

var penalizadosSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    codigo: {type: String, required: true},
    email: String
});

mongoose.model('penalizados', penalizadosSchema, 'penalizados');