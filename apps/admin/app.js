module.exports = function (config) {

	var express = require('express'),
			bootstrap = require(config.paths.core.bootstrap),
			app = express();

	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');

  // WIP: will be combined with getControllers into appConfig method
  bootstrap.configureMounts(app, config)

	// Require all routes from default.js
	bootstrap.getControllers(app, config);

	return app;

}
