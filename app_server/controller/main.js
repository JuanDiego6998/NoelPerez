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
		actividades: body[0].actividades
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
var renderReservasL = function(req,res, body){
	res.render('reservasL', {
		reservas: body
	})
}

module.exports.reservasL = function(req, res){
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
			renderReservasL(req, res, body);
		}
	)
}

var renderReservasM = function(req,res, body){
	res.render('reservasM', {
		reservas: body
	})
}

module.exports.reservasM = function(req, res){
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
			renderReservasM(req, res, body);
		}
	)
}

var renderReservasMi = function(req,res, body){
	res.render('reservasMi', {
		reservas: body
	})
}

module.exports.reservasMi = function(req, res){
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
			renderReservasMi(req, res, body);
		}
	)
}

var renderReservasJ = function(req,res, body){
	res.render('reservasJ', {
		reservas: body
	})
}

module.exports.reservasJ = function(req, res){
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
			renderReservasJ(req, res, body);
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
		cursos: body
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
		anio= req.body.anio,
		cursos = req.body.cursos.split(',')
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
///////////////////////////////////////////////////