var mongoose = require('mongoose');
var cursos = mongoose.model("cursos");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo curso
module.exports.cursosCreate = function (req, res) {
    cursos.create({
        anio: req.body.anio,
        cursos: req.body.cursos
    }, function (err, curso) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, curso)
        }
    });
};

//despliega una lista de todos los cursos
module.exports.cursosList = function (req, res) {
    cursos
        .find()
        .exec(
            function (err, curso) {
                if (!curso) {
                    sendJsonResponse(res, 404, {
                        "message": "cursos not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, curso);
            });
};

//actualiza un curso especifico
module.exports.cursosUpdateOne = function (req, res) {
    if (!req.params.cursoid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, cursoid is required"
        });
        return;
    }
    cursos
        .findById(req.params.cursoid)
        .exec(
            function (err, curso) {
                if (!curso) {
                    sendJsonResponse(res, 404, {
                        "message": "cursoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                curso.anio = req.body.anio;
                curso.cursos = req.body.cursos;
                curso.save(function (err, curso) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, curso);
                    }
                });
            }
        );
};

//elimina un curso especifico
module.exports.cursosDeleteOne = function (req, res) {
    var cursoid = req.params.cursoid;
    if (cursoid) {
        cursos
            .findByIdAndRemove(cursoid)
            .exec(
                function (err, curso) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No cursoid"
        });
    }
};

//despliega un curso especifico
module.exports.cursosReadOne = function (req, res) {
    if (req.params && req.params.cursoid) {
        cursos
            .findById(req.params.cursoid)
            .exec(function (err, curso) {
                if (!curso) {
                    sendJsonResponse(res, 404, {
                        "message": "cursoid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, curso);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No cursoid in request"
        });
    }
};