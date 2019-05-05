var mongoose = require('mongoose');
var log = mongoose.model("log");

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

//crea un nuevo usuario
module.exports.logCreate = function (req, res) {
    log.create({
        user: req.body.user,
        password: req.body.password
    }, function (err, logs) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, logs)
        }
    });
};

//despliega una lista de todos los usuarios
module.exports.logList = function (req, res) {
    log
        .find()
        .exec(
            function (err, logs) {
                if (!logs) {
                    sendJsonResponse(res, 404, {
                        "message": "logs not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, logs);
            });
};

//actualiza un usuario especifico
module.exports.logUpdateOne = function (req, res) {
    if (!req.params.logid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, logid is required"
        });
        return;
    }
    log
        .findById(req.params.logid)
        .exec(
            function (err, logs) {
                if (!logs) {
                    sendJsonResponse(res, 404, {
                        "message": "logid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                logs.user = req.body.user;
                logs.password = req.body.password;
                logs.save(function (err, logs) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, logs);
                    }
                });
            }
        );
};

//elimina un log especifico
module.exports.logDeleteOne = function (req, res) {
    var logid = req.params.logid;
    if (logid) {
        log
            .findByIdAndRemove(logid)
            .exec(
                function (err, logs) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No logid"
        });
    }
};

//despliega un log especifico
module.exports.logReadOne = function (req, res) {
    if (req.params && req.params.logid) {
        log
            .findById(req.params.logid)
            .exec(function (err, logs) {
                if (!logs) {
                    sendJsonResponse(res, 404, {
                        "message": "logid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, logs);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No logid in request"
        });
    }
};