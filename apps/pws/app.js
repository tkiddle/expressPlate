module.exports = function (config) {

	var express = require('express'),
		pws = express();

	pws.get('/', function (request, response) {
		response.send('home page from pws');
	});

	return pws;
};