var mongoose = require('mongoose');
var equipos = mongoose.model("equipos");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo equipo
module.exports.equiposCreate = function (req, res) {
    equipos.create({
        nombre: req.body.nombre,
        miembros: req.body.miembros
    }, function (err, equipo) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, equipo)
        }
    });
};

//despliega una lista de todos los equipos
module.exports.equiposList = function (req, res) {
    equipos
        .find()
        .exec(
            function (err, equipo) {
                if (!equipo) {
                    sendJsonResponse(res, 404, {
                        "message": "equipos not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, equipo);
            });
};

//actualiza un equipo especifico
module.exports.equiposUpdateOne = function (req, res) {
    if (!req.params.equipoid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, equipoid is required"
        });
        return;
    }
    equipos
        .findById(req.params.equipoid)
        .exec(
            function (err, equipo) {
                if (!equipo) {
                    sendJsonResponse(res, 404, {
                        "message": "equipoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                equipo.nombre = req.body.nombre;
                equipo.miembros = req.body.miembros.split(',');
                equipo.save(function (err, equipo) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, equipo);
                    }
                });
            }
        );
};

//elimina un equipo especifico
module.exports.equiposDeleteOne = function (req, res) {
    var equipoid = req.params.equipoid;
    if (equipoid) {
        equipos
            .findByIdAndRemove(equipoid)
            .exec(
                function (err, equipo) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No equipoid"
        });
    }
};

//despliega un equipo especifico
module.exports.equiposReadOne = function (req, res) {
    if (req.params && req.params.equipoid) {
        equipos
            .findById(req.params.equipoid)
            .exec(function (err, equipo) {
                if (!equipo) {
                    sendJsonResponse(res, 404, {
                        "message": "equipoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, equipo);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No equipoid in request"
        });
    }
};