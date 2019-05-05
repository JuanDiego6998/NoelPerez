var mongoose = require('mongoose');

var shortcvSchema = new mongoose.Schema({
    fecha:{type:String, required:true},
    educacion:{type:String, required:true},
    actividades: {type: String, required: true}
});

mongoose.model('shortcv', shortcvSchema, 'shortcv');