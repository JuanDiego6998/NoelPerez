var mongoose = require('mongoose');

var proyectosSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true},
    equipo: String
});

mongoose.model('proyectos', proyectosSchema, 'proyectos');