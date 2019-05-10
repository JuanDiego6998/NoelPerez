var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlMain = require('../controller/main');

router.get('/', ctrlMain.index);
router.get('/index_admin', ctrlMain.indexAdmin);

router.get('/proyectos',ctrlMain.proyectos);
router.get('/proyectos_admin', ctrlMain.proyectosAdmin);
router.post('/proyectos_admin', ctrlMain.newProyecto);
router.get('/proyectos_admin/:proyectoid', ctrlMain.deleteProyecto);

router.get('/agenda', ctrlMain.agenda);
router.get('/agenda_admin', ctrlMain.agendaAdmin);
router.post('/agenda_admin', ctrlMain.updateAgenda);

router.get('/about', ctrlMain.about);
router.get('/about_admin', ctrlMain.aboutAdmin);
router.post('/about_admin', ctrlMain.updateAbout);


router.get('/log', ctrlMain.log);
router.post('/log', ctrlMain.checkLog);

router.get('/reservas', ctrlMain.reservas);
router.post('/reservas', ctrlMain.checkReserva);

router.get('/cursos', ctrlMain.cursos);
router.get('/cursos_admin', ctrlMain.cursosAdmin);
router.post('/cursos_admin', ctrlMain.newCurso);
router.post('/cursos_admin/:cursoid', ctrlMain.updateCurso);
router.get('/cursos_admin/:cursoid', ctrlMain.cursosAdmin);
router.get('/cursos_admin/delete/:cursoid', ctrlMain.deleteCurso);

router.get('/estadoAgenda', ctrlMain.estadoAgenda);
router.get('/estadoAgenda/:reservaid', ctrlMain.penalizarReserva);
router.get('/reset', ctrlMain.resetReservas);

router.get('/equipos', ctrlMain.equipos);
router.get('/equipos_admin', ctrlMain.equiposAdmin);
router.post('/equipos_admin', ctrlMain.newEquipo);
router.get('/equipos_admin/:equipoid', ctrlMain.deleteEquipo);

module.exports = router;