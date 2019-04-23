var request = require('request');
var apiOptions = {
	server: 'http://localhost:3000'
};

/*if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'https://f-593-photoroom.herokuapp.com';
}*/

var renderHome = function (req, res, body) {
	res.render('index', {
		title: body
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

var renderResearch = function (req, res, body) {
	res.render('research', {
		title: body
	});
}

module.exports.research = function (req, res) {
	var requestOptions, path;
	path = '/api/research';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			renderResearch(req, res, body);
		}
	)
}

var renderTeams = function(req, res, body){
	res.render('teams', {
		title: body
	})
}

module.exports.teams = function (req, res) {
	var requestOptions, path;
	path = '/api/teams';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(
		requestOptions,
		function(err, response, body){
			renderTeams(req, res, body);
		}
	);
}

var renderAgenda = function (req, res, body) {
	res.render('agenda', {
		title: body
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