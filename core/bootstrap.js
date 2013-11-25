var path = require('path'),
	bootstrap = {};


bootstrap.loadMounts = function (app, config) {

	var paths = config.paths,
		mounts = config.mounts,
		mounted = [],
		mount;

	for ( var i = 0, len = mounts.length; i < len; i++ ) {

		mount = mounts[i];

		mounted.push(mount.directory);

		try  {

			app.use( mount.path, require( path.join(paths.apps.root , mount.directory, 'app') ) (config) );


		} catch (e) {

			mounted.splice(mounted.indexOf(mount.directory));

			console.info(e);

		}
		

		
	}


this.loadControllers(app, congif, mounted, paths);


};


bootstrap.loadControllers = function (app, congif, mount, paths) {

	//require( path.join(paths.apps.root , mount.directory, 'controllers/default') ) (app,config);
	console.log('Woo');

}

module.exports = bootstrap;


