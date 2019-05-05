var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlMain = require('../controller/main');

router.get('/', ctrlMain.index);

router.get('/proyectos',ctrlMain.proyectos);

router.get('/agenda', ctrlMain.agenda);

router.get('/about', ctrlMain.about);
router.get('/about_admin', ctrlMain.aboutAdmin);
router.post('/about_admin', ctrlMain.updateAbout);

router.get('/log', ctrlMain.log);
router.post('/log', ctrlMain.checkLog);

router.get('/reservasL', ctrlMain.reservasL);

router.get('/reservasM', ctrlMain.reservasM);

router.get('/reservasMi', ctrlMain.reservasMi);

router.get('/reservasJ', ctrlMain.reservasJ);
router.post('/reservasJ', ctrlMain.newReserva);

router.get('/cursos', ctrlMain.cursos);
router.get('/cursos_admin', ctrlMain.cursosAdmin);

router.get('/proyectos_admin', ctrlMain.proyectosAdmin);
router.post('/proyectos_admin', ctrlMain.newProyecto);

router.get('/index_admin', ctrlMain.indexAdmin);

module.exports = router;