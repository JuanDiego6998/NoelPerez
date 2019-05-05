var mongoose = require('mongoose');

var logSchema = new mongoose.Schema({
    user:{type:String, required:true},
    password:{type:String, required:true}
});

mongoose.model('log', logSchema, 'log');