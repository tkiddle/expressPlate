var path = require('path'),
		bootstrap = {},
		viewOverride;

bootstrap.temps = {

	verified : [],
	mounted : [],
	count : 0

};

// Put the '/' path at the last pos in the array - We do this to avoid any
// Overwriting of the routes within routes and controllers.
bootstrap.sortMounts = function (mounts) {

	var rootApp;

	for (var i = 0, len = mounts.length; i < len; i++) {

		if (len > 1) {

			if(mounts[i].path === '/') {

				rootApp = mounts.splice(i, 1);
				mounts.push(rootApp[0]);

			}

		}

	}

	return mounts;

};

// Get the mounts and 'USE' them
bootstrap.getMounts = function (app, config) {

	var mounts = bootstrap.sortMounts(config.mounts);

	for (var i = 0,  len = mounts.length; i < len; i++) {

		try {

			// Create app specific object within the config.paths object to hold app paths
			config.paths.apps[mounts[i].directory] = {};
			config.paths.apps[mounts[i].directory].root = path.join(config.paths.apps.root, mounts[i].directory);

			bootstrap.temps.verified.push(mounts[i].directory);
			app.use(mounts[i].path, require( path.join(config.paths.apps.root, mounts[i].directory, 'app') ) (mounts[i].directory, config) );


		} catch (e) {

			rmIndex = bootstrap.temps.verified.indexOf(mounts[i].directory);
			bootstrap.temps.verified.splice(rmIndex, 1);

			delete config.paths.apps[mounts[i].directory]

		}

	}

	app.listen(config.port);
};

// Iterate over verified mounts and require each default.js
bootstrap.getControllers = function (config)  {

	for (var len = bootstrap.temps.verified.length; bootstrap.temps.count < len; bootstrap.temps.count++) {

		bootstrap.temps.mounted.push(bootstrap.temps.verified[bootstrap.temps.count]);
		require( path.join(config.paths.apps.root, bootstrap.temps.verified[bootstrap.temps.count], 'controllers', 'default') )(this, config);

	}

};

bootstrap.setAppConfig = function (config) {

	var appPaths = config.paths.apps;

	this.locals.paths = {};
	this.locals.paths.shared = {};

	this.locals.paths.shared.root = appPaths['shared'];
	this.locals.paths.shared.views = appPaths['shared'] + 'views';

	this.locals.paths.active = {};
	this.locals.paths.active.root = appPaths[this.locals.appId].root;
	this.locals.paths.active.views = appPaths[this.locals.appId].root + '/views';

};

// Configure app controllers, viewOverride and appName
bootstrap.initSubApp = function(app, appId, config) {

	app.locals.appId = appId;

	require( path.join(config.paths.core.root, 'viewOverride') )(app, config);

	bootstrap.getControllers.call(app, config);
	bootstrap.setAppConfig.call(app, config);

};

module.exports = bootstrap;


