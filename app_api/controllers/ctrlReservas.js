var mongoose = require('mongoose');
var reserva = mongoose.model("reservas");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo reserva
module.exports.reservaCreate = function (req, res) {
    reserva.create({
        dia: req.body.dia,
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        email: req.body.email,
        comentarios: req.body.comentarios
    }, function (err, reservas) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, reservas)
        }
    });
};

//despliega una lista de todos los reservas
module.exports.reservaList = function (req, res) {
    reserva
        .find()
        .exec(
            function (err, reservas) {
                if (!reservas) {
                    sendJsonResponse(res, 404, {
                        "message": "reservas not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, reservas);
            });
};

//actualiza un reserva especifico
module.exports.reservaUpdateOne = function (req, res) {
    if (!req.params.reservaid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, reservaid is required"
        });
        return;
    }
    reserva
        .findById(req.params.reservaid)
        .exec(
            function (err, reservas) {
                if (!reservas) {
                    sendJsonResponse(res, 404, {
                        "message": "reservaid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                reservas.dia = req.body.dia;
                reservas.nombre = req.body.nombre;
                reservas.codigo = req.body.codigo;
                reservas.email = req.body.email;
                reservas.comentarios = req.body.comentarios;
                logs.save(function (err, logs) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, reservas);
                    }
                });
            }
        );
};

//elimina un reserva especifico
module.exports.reservaDeleteOne = function (req, res) {
    var reservaid = req.params.reservaid;
    if (reservaid) {
        reserva
            .findByIdAndRemove(reservaid)
            .exec(
                function (err, reservas) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No reservaid"
        });
    }
};

//despliega un reserva especifico
module.exports.reservaReadOne = function (req, res) {
    if (req.params && req.params.reservaid) {
        reserva
            .findById(req.params.reservaid)
            .exec(function (err, reservas) {
                if (!reservas) {
                    sendJsonResponse(res, 404, {
                        "message": "reservaid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, reservas);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No reservaid in request"
        });
    }
};