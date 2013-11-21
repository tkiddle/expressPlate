var path = require('path'),
	runAll = {};



runAll.loadMounts = function (app, config) {

	var paths = config.paths,
		mounts = config.mounts,
		appsMounted = false,
		mount;

	for ( var i = 0, len = mounts.length; i < len; i++ ) {

		mount = mounts[i];

		app.use( mount.path, require( path.join(paths.apps.root , mount.directory, 'app') ) (config) );
		
		if (i == (len - 1)) {

			appsMounted = true;

		}

		
	}

	if (appsMounted) {

		app.listen(config.port);

	}


}

module.exports = runAll;


