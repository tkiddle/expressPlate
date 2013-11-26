module.exports = function (config) {

	var express = require('express'),
		admin = express();

	
	admin.get('/', function (request, response) {

		response.send('Admin Page');
		
	});


	return admin;
}