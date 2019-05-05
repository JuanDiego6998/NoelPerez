var mongoose = require('mongoose');
var shortCV = mongoose.model("shortcv");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo shortcv
module.exports.shortcvCreate = function (req, res) {
    shortCV.create({
        fecha: req.body.fecha,
        educacion: req.body.educacion,
        actividades: req.body.actividades
    }, function (err, shortcv) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, shortcv)
        }
    });
};

//despliega el shortcv
module.exports.shortcvList = function (req, res) {
    shortCV
        .find()
        .exec(
            function (err, shortcv) {
                if (!shortcv) {
                    sendJsonResponse(res, 404, {
                        "message": "shortCV not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, shortcv);
            });
};

//actualiza el shortcv
module.exports.shortcvUpdateOne = function (req, res) {
    shortCV
        .findOne({_id: "5cce6b92623ceb59701dc86c"})
        .exec(
            function (err, shortcv) {
                if (!shortcv) {
                    sendJsonResponse(res, 404, {
                        "message": "shortCV not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                shortcv.fecha = req.body.fecha;
                shortcv.educacion = req.body.educacion;
                shortcv.actividades = req.body.actividades;
                shortcv.save(function (err, shortcv) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, shortcv);
                    }
                });
            }
        );
};

//elimina el shortcv
module.exports.shortcvDeleteOne = function (req, res) {
    proyectos
        .find()
        .exec(
            function (err, shortcv) {
                if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 204, null);
            }
        );
};