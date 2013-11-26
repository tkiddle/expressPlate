module.exports = function (config) {

	var express = require('express'),
		bootstrap = require(config.paths.core.bootstrap),
		app = express(),
		path = require('path');

		//require( path.join(config.paths.apps.root , 'pws', 'controllers/default') ) (app,config);

		bootstrap.loadControllers(app, config);



	return app;
}