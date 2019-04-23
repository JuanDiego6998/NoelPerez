var mongoose = require('mongoose');
var proyectos = mongoose.model("proyectos");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo proyecto
module.exports.proyectosCreate = function (req, res) {
    proyectos.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        equipo : req.body.equipo
    }, function (err, proyecto) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, proyecto)
        }
    });
};

//despliega una lista de todos los proyectos
module.exports.proyectosList = function (req, res) {
    proyectos
        .find()
        .exec(
            function (err, proyecto) {
                if (!fotografo) {
                    sendJsonResponse(res, 404, {
                        "message": "proyectos not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, proyecto);
            });
};

//actualiza un proyecto especifico
module.exports.proyectosUpdateOne = function (req, res) {
    if (!req.params.proyectoid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, proyectoid is required"
        });
        return;
    }
    proyectos
        .findById(req.params.proyectoid)
        .exec(
            function (err, proyecto) {
                if (!proyecto) {
                    sendJsonResponse(res, 404, {
                        "message": "proyectoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                proyecto.nombre = req.body.nombre;
                proyecto.descripcion = req.body.descripcion;
                proyecto.equipo = req.body.equipo;
                proyecto.save(function (err, proyecto) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, proyecto);
                    }
                });
            }
        );
};

//elimina un proyecto especifico
module.exports.proyectoDeleteOne = function (req, res) {
    var proyectoid = req.params.proyectoid;
    if (proyectoid) {
        proyectos
            .findByIdAndRemove(proyectoid)
            .exec(
                function (err, proyecto) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No proyectoid"
        });
    }
};

//despliega un proyecto especifico
module.exports.proyectosReadOne = function (req, res) {
    if (req.params && req.params.proyectoid) {
        proyectos
            .findById(req.params.proyectoid)
            .exec(function (err, proyecto) {
                if (!proyecto) {
                    sendJsonResponse(res, 404, {
                        "message": "proyectoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, proyecto);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No proyectoid in request"
        });
    }
};