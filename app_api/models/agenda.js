var mongoose = require('mongoose');

var agendaSchema = new mongoose.Schema({
    lunes:{type:String, required:true},
    martes:{type:String, required:true},
    miercoles: {type: String, required: true},
    jueves: {type: String, required: true}
});

mongoose.model('agenda', agendaSchema, 'agenda');