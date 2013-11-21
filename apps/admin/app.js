module.exports = function (config) {

	var express = require('express'),
		admin = express();

	console.log('ADMIN Loaded');

	admin.get('/', function (request, response) {

		response.send('Admin Page');
		
	});


	return admin;
}