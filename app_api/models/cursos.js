var mongoose = require('mongoose');

var cursosSchema = new mongoose.Schema({
    anio:{type:String, required:true},
    cursos:{type:[String], required:true}
});

mongoose.model('cursos', cursosSchema, 'cursos');