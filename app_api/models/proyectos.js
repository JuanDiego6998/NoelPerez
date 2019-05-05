var mongoose = require('mongoose');

var proyectosSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true},
    contenido: {type: String, required: true}
});

mongoose.model('proyectos', proyectosSchema, 'proyectos');