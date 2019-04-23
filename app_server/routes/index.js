var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlMain = require('../controller/main');
router.get('/', ctrlMain.index);
module.exports=router;

var ctrlResearch = require('../controller/main');
router.get('/perfil/:id',ctrlResearch.research);
module.exports=router;

var ctrlAgenda = require('../controller/main');
router.get('/fotografos', ctrlAgenda.agenda);
module.exports=router;

var ctrlTeams = require('../controller/main');
router.get('/categorias', ctrlTeams.teams);
module.exports=router;
