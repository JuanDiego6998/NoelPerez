var mongoose = require('mongoose');

var equiposSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    miembros:{type:[String], required:true}
});

mongoose.model('equipos', equiposSchema, 'equipos');