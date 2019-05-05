var express = require('express');
var router = express.Router();
var ctrlProyectos = require('../controllers/ctrlProyectosAPI');
var ctrlShortCV = require('../controllers/ctrlShortCV');
var ctrlAgenda = require('../controllers/ctrlAgenda');
var ctrlLog = require('../controllers/ctrlLog');
var ctrlReservas = require('../controllers/ctrlReservas');
var ctrlCursos = require('../controllers/ctrlCursos');

router.get('/proyectos', ctrlProyectos.proyectosList);
router.post('/proyectos',ctrlProyectos.proyectosCreate);
router.get('/proyectos/:proyectoid', ctrlProyectos.proyectosReadOne);
router.put('/proyectos/:proyectoid',ctrlProyectos.proyectosUpdateOne);
router.delete('/proyectos/:proyectoid', ctrlProyectos.proyectosDeleteOne);

router.get('/about', ctrlShortCV.shortcvList);
router.post('/about', ctrlShortCV.shortcvCreate);
router.put('/about', ctrlShortCV.shortcvUpdateOne);
router.delete('/about', ctrlShortCV.shortcvDeleteOne);

router.get('/agenda', ctrlAgenda.agendaList);
router.post('/agenda', ctrlAgenda.agendaCreate);
router.put('/agenda', ctrlAgenda.agendaUpdateOne);
router.delete('/agenda', ctrlAgenda.agendaDeleteOne);

router.get('/log', ctrlLog.logList);
router.post('/log',ctrlLog.logCreate);
router.get('/log/:logid', ctrlLog.logReadOne);
router.put('/log/:logid',ctrlLog.logUpdateOne);
router.delete('/log/:logid', ctrlLog.logDeleteOne);

router.get('/reservas', ctrlReservas.reservaList);
router.post('/reservas',ctrlReservas.reservaCreate);
router.get('/reservas/:reservaid', ctrlReservas.reservaReadOne);
router.put('/reservas/:reservaid',ctrlReservas.reservaUpdateOne);
router.delete('/reservas/:reservaid', ctrlReservas.reservaDeleteOne);

router.get('/cursos', ctrlCursos.cursosList);
router.post('/cursos',ctrlCursos.cursosCreate);
router.get('/cursos/:cursoid', ctrlCursos.cursosReadOne);
router.put('/cursos/:cursoid',ctrlCursos.cursosUpdateOne);
router.delete('/cursos/:cursoid', ctrlCursos.cursosDeleteOne);

module.exports = router;