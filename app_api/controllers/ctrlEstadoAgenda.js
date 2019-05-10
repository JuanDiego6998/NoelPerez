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

module.exports.getReserva = function(req, res){
    if (req.params && req.params.reservaid) {
        reservas
            .findById(req.params.reservaid)
            .select('nombre codigo email')
            .exec(function (err, reserva) {
                if (!reserva) {
                    sendJsonResponse(res, 404, {
                        "message": "reservaid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, reserva);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No reservaid in request"
        });
    }
}