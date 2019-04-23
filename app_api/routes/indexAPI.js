var express = require('express');
var router = express.Router();
var ctrlProyectos = require('../controllers/ctrlProyectosAPI');

router.get('/proyectos', ctrlProyectos.proyectosList);
router.post('/proyectos',ctrlProyectos.proyectosCreate);
router.get('/proyectos/:proyectoid', ctrlProyectos.proyectosReadOne);
router.put('/proyectos/:proyectoid',ctrlProyectos.proyectosUpdateOne);
router.delete('/proyectos/:proyectoid', ctrlProyectos.proyectosDeleteOne);

module.exports = router;