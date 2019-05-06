var request = require('request');
var apiOptions = {
	server: 'http://localhost:3000'
};

/*if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'https://f-593-photoroom.herokuapp.com';
}*/

///////////////////////////////////////index e index admin
var renderHome = function (req, res, body) {
	res.render('index', {
		proyectos: body
	});
}

module.exports.index = function (req, res) {
	var requestOptionsOne;
	var pathOne = apiOptions.server + '/api/proyectos';
	requestOptionsOne = {
		url: pathOne,
		method: 'GET',
		json: {}
	};
	request(
		requestOptionsOne,
		function (err, response, body) {
			renderHome(req, res, body);
		}
	);
}

var renderIndexAdmin = function(req, res, body){
	res.render('index_admin', {
		layout: "admin",
		proyectos: body
	})
}
module.exports.indexAdmin = function(req,res){
	var requestOptions, path;
	path = '/api/proyectos';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			renderIndexAdmin(req, res, body);
		}
	)
}
////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////proyectos y proyectos admin
var renderProyectos = function (req, res, body) {
	res.render('proyectos', {
		proyectos: body
	});
}

module.exports.proyectos = function (req, res) {
	var requestOptions, path;
	path = '/api/proyectos';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			renderProyectos(req, res, body);
		}
	)
}

var renderProyectosAdmin = function(req, res, body){
	res.render('proyectos_admin', {
		layout: "admin",
		proyectos: body
	})
}
module.exports.proyectosAdmin = function(req, res){
	var requestOptions, path;
	path = '/api/proyectos';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			renderProyectosAdmin(req, res, body);
		}
	)
}

module.exports.newProyecto = function(req, res){
	var requestOptions, path, postdata;
	path = '/api/proyectos';
	postdata = {
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		contenido: req.body.contenido
	}
	requestOptions = {
		url: apiOptions.server + path,
		method: 'POST',
		json: postdata
	};
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 201){
				res.redirect('/proyectos_admin')
			}
		}
	)
}

module.exports.deleteProyecto = function(req, res){
	var requestOptions, path, proyectoid;
	proyectoid = req.params.proyectoid;
	path = '/api/proyectos/' + proyectoid;
	requestOptions = {
		url: apiOptions.server + path,
		method: 'DELETE',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 204){
				res.redirect('/proyectos_admin')
			}
		}
	)
}
///////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////about y about admin
var renderAbout = function(req, res, body){
	res.render('about', {
		fecha: body[0].fecha,
		educacion: body[0].educacion,
		actividades: body[0].actividades
	})
}

module.exports.about = function (req, res) {
	var requestOptions, path;
	path = '/api/about';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			renderAbout(req, res, body);
		}
	);
}

var renderAboutAdmin = function(req, res, body){
	res.render('about_admin', {
		fecha: body[0].fecha,
		educacion: body[0].educacion,
		actividades: body[0].actividades,
		layout: 'admin'
	})
}
module.exports.aboutAdmin = function(req, res){
	var requestOptions, path;
	path = '/api/about';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			renderAboutAdmin(req, res, body);
		}
	);
}

module.exports.updateAbout = function(req, res){
	const path = '/api/about';
	const putdata = {
		fecha: req.body.fecha,
		educacion: req.body.educacion,
		actividades: req.body.actividades
	}
	const requestOptions = {
		url: apiOptions.server + path,
		method: 'PUT',
		json: putdata
	}
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 200){
				res.redirect("/about_admin")
			}
		}
	);
}

////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////agenda y agenda admin
var renderAgenda = function (req, res, body) {
	res.render('agenda', {
		lunes: body[0].lunes,
		martes: body[0].martes,
		miercoles: body[0].miercoles,
		jueves: body[0].jueves
	});
}

module.exports.agenda = function (req, res) {
	var requestOptions, path;
	path = '/api/agenda';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {},
	};
	request(
		requestOptions,
		function (err, response, body) {
			renderAgenda(req, res, body);
		}
	);
}

var renderAgendaAdmin = function(req, res, body){
	res.render('agenda_admin', {
		lunes: body[0].lunes,
		martes: body[0].martes,
		miercoles: body[0].miercoles,
		jueves: body[0].jueves,
		layout: 'admin'
	});
}
module.exports.agendaAdmin = function(req, res){
	var requestOptions, path;
	path = '/api/agenda';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {},
	};
	request(
		requestOptions,
		function (err, response, body) {
			renderAgendaAdmin(req, res, body);
		}
	);
}
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////log y log admin
var renderLog = function(req, res, body){
	res.render('log', {
		log: body
	})
}

module.exports.log = function(req, res){
	var requestOptions, path;
	path = '/api/log';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			renderLog(req, res, body);
		}
	)
}

module.exports.checkLog = function(req, res){
	var requestOptions, path;
	path = '/api/log';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			if(body[0].user === req.body.usuario && body[0].password === req.body.password){
				res.redirect('/index_admin');
			} else {
				alert("Usuario o contraseña incorrectos");
			}
		}
	)
}
/////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////reservas y reservas admin
var renderReservas = function(req,res, body){
	res.render('reservas', {
		reservas: body
	})
}

module.exports.reservas = function(req, res){
	var requestOptions, path;
	path = '/api/reservas';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			renderReservas(req, res, body);
		}
	)
}

module.exports.newReserva = function(req, res){
	var requestOptions, path, postdata;
	path = '/api/reservas';
	postdata = {
		dia: req.body.dia,
		nombre: req.body.nombre,
		codigo: req.body.codigo,
		email: req.body.email,
		comentarios: req.body.comentarios
	};
	requestOptions = {
		url: apiOptions.server + path,
		method: "POST",
		json: postdata
	};
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 201){
				res.redirect('/agenda');
			}else{
				
			}
		}
	)
}
////////////////////////////////////////////////////////////

////////////////////////////////////////////cursos y cursos admin
var renderCursos = function(req, res, body){
	res.render('cursos', {
		cursos: body
	})
}

module.exports.cursos = function(req, res){
	var requestOptions, path;
	path = '/api/cursos';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			renderCursos(req, res, body);
		}
	)
}


var renderCursosAdmin = function(req, res, body){
	res.render('cursos_admin', {
		cursos: body,
		layout: 'admin'
	})
}
module.exports.cursosAdmin = function(req, res){
	var requestOptions, path;
	path = '/api/cursos';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			renderCursosAdmin(req, res, body);
		}
	)
}

module.exports.newCurso = function(req, res){
	var requestOptions, path, postdata;
	path = '/api/cursos';
	postdata = {
		anio: req.body.anio,
		cursos: req.body.cursos.split(',')
	}
	requestOptions = {
		url: apiOptions.server + path,
		method: 'POST',
		json: postdata
	}
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 201){
				res.redirect('/cursos_admin');
			}
		}
	)
}

module.exports.updateCurso = function(req, res){
	var cursoid = req.params.cursoid;
	const path = '/api/cursos/' + cursoid;
	const putdata = {
		cursos: req.body.cursos.split(',')
	}
	const requestOptions = {
		url: apiOptions.server + path,
		method: 'PUT',
		json: putdata
	}
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 200){
				res.redirect("/cursos_admin")
			}
		}
	);
}

module.exports.deleteCurso = function(req, res){
	var requestOptions, path, cursoid;
	cursoid = req.params.cursoid;
	path = '/api/cursos/' + cursoid;
	requestOptions = {
		url: apiOptions.server + path,
		method: 'DELETE',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 204){
				res.redirect('/cursos_admin')
			}
		}
	)
}
///////////////////////////////////////////////////

//////////////////////////////////////////////////estado agenda
var renderEstadoAgenda = function(req, res, reservas, penalizados){
	res.render("estadoAgenda",{
		reservas: reservas,
		penalizados: penalizados,
		layout: 'admin'
	})
}
module.exports.estadoAgenda = function(req, res){
	var requestOptions, path;
	path = '/api/estadoAgenda';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			var body1 = [];
			var body2 = [];
				for(j=0; j<body[0].length; j++){
					body1[j] = body[0][j];
				}
				for(k=0; k<body[1].length; k++){
					body2[k] = body[1][k];
				}
			renderEstadoAgenda(req, res, body1, body2);
		}
	)
}
///////////////////////////////////////////////////

//////////////////////////////////////////////equipos y equipos admin
var renderEquipos = function(req, res, body){
	res.render('equipos',{
		equipos: body
	})
}
module.exports.equipos = function(req, res){
	var requestOptions, path;
	path = '/api/equipos';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			renderEquipos(req, res, body);
		}
	)
}

var renderEquiposAdmin = function(req, res, body){
	res.render('equipos_admin', {
		equipos: body,
		layout: 'admin'
	})
}
module.exports.equiposAdmin = function(req, res){
	var requestOptions, path;
	path = '/api/equipos';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}
	request(
		requestOptions,
		function(err, response, body){
			renderEquiposAdmin(req, res, body);
		}
	)
}

module.exports.newEquipo = function(req, res){
	var requestOptions, path, postdata;
	path = '/api/equipos';
	postdata = {
		nombre: req.body.nombre,
		miembros: req.body.miembros.split(',')
	}
	requestOptions = {
		url: apiOptions.server + path,
		method: 'POST',
		json: postdata
	}
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 201){
				res.redirect('/equipos_admin');
			}
		}
	)
}

module.exports.deleteEquipo = function(req, res){
	var requestOptions, path, equipoid;
	equipoid = req.params.equipoid;
	path = '/api/equipos/' + equipoid;
	requestOptions = {
		url: apiOptions.server + path,
		method: 'DELETE',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			if(response.statusCode === 204){
				res.redirect('/equipos_admin')
			}
		}
	)
}