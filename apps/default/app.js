module.exports = function (config) {

	var express = require('express'),
		bootstrap = require(config.paths.core.bootstrap),
		app = express();

		//Require all routes  from default.js
		bootstrap.getControllers(app, config);

	return app;

}