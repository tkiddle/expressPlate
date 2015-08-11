module.exports = function (appId, config) {

	var express = require('express'),
			bootstrap = require(config.paths.core.bootstrap),
			app = express();

	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');

	bootstrap.initSubApp(app, appId, config);

	return app;

}
