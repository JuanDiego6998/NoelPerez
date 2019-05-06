var mongoose = require('mongoose');
var reservas = mongoose.model("reservas");
var penalizados = mongoose.model("penalizados");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//despliega el estado de agenda
module.exports.estadoAgendaList = function (req, res) {
    Promise.all([
        reservas.find(),
        penalizados.find()
    ]).then(results=>{
        var [reservas, penalizados] = results;
        sendJsonResponse(res, 200, results);
    })
};