var mongoose = require('mongoose');
var penalizados = mongoose.model("penalizados");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo penalizado
module.exports.penalizadosCreate = function (req, res) {
    penalizados.create({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        email : req.body.email
    }, function (err, penalizado) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, penalizado)
        }
    });
};

//despliega una lista de todos los penalizados
module.exports.penalizadosList = function (req, res) {
    penalizados
        .find()
        .exec(
            function (err, penalizado) {
                if (!penalizado) {
                    sendJsonResponse(res, 404, {
                        "message": "penalizados not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, penalizado);
            });
};

//actualiza un penalizado especifico
module.exports.penalizadosUpdateOne = function (req, res) {
    if (!req.params.penalizadoid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, penalizadoid is required"
        });
        return;
    }
    penalizados
        .findById(req.params.penalizadoid)
        .exec(
            function (err, penalizado) {
                if (!penalizado) {
                    sendJsonResponse(res, 404, {
                        "message": "penalizadoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                penalizado.nombre = req.body.nombre;
                penalizado.codigo = req.body.codigo;
                penalizado.email = req.body.email;
                penalizado.save(function (err, penalizado) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, penalizado);
                    }
                });
            }
        );
};

//elimina un penalizado especifico
module.exports.penalizadosDeleteOne = function (req, res) {
    var penalizadoid = req.params.penalizadoid;
    if (penalizadoid) {
        penalizados
            .findByIdAndRemove(penalizadoid)
            .exec(
                function (err, penalizado) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No penalizadoid"
        });
    }
};

//despliega un penalizado especifico
module.exports.penalizadosReadOne = function (req, res) {
    if (req.params && req.params.penalizadoid) {
        penalizados
            .findById(req.params.penalizadoid)
            .exec(function (err, penalizado) {
                if (!penalizado) {
                    sendJsonResponse(res, 404, {
                        "message": "penalizadoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, penalizado);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No penalizadoid in request"
        });
    }
};