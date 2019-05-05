var mongoose = require('mongoose');
var agenda = mongoose.model("agenda");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo agenda
module.exports.agendaCreate = function (req, res) {
    agenda.create({
        lunes: req.body.lunes,
        martes: req.body.martes,
        miercoles: req.body.miercoles,
        jueves: req.body.jueves
    }, function (err, agendas) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, agendas)
        }
    });
};

//despliega el agenda
module.exports.agendaList = function (req, res) {
    agenda
        .find()
        .exec(
            function (err, agendas) {
                if (!agendas) {
                    sendJsonResponse(res, 404, {
                        "message": "shortCV not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, agendas);
            });
};

//actualiza el agenda
module.exports.agendaUpdateOne = function (req, res) {
    agenda
        .find()
        .exec(
            function (err, agendas) {
                if (!agendas) {
                    sendJsonResponse(res, 404, {
                        "message": "shortCV not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                agendas.lunes = req.body.lunes;
                agendas.martes = req.body.martes;
                agendas.miercoles = req.body.miercoles;
                agendas.jueves = req.body.jueves;
                agendas.save(function (err, agendas) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, agendas);
                    }
                });
            }
        );
};

//elimina el agenda
module.exports.agendaDeleteOne = function (req, res) {
    agenda
        .find()
        .exec(
            function (err, agendas) {
                if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 204, null);
            }
        );
};