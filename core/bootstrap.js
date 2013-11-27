var path = require('path'),
	bootstrap = {};

bootstrap.temps = {

	verified : [],
	mounted : [],
	count : 0

};

//Put the '/' path at the last pos in the array
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

}

//Get the mounts and 'USE' them
bootstrap.getMounts = function (app, config) {

	var mounts = bootstrap.sortMounts(config.mounts);		

	for (var i = 0,  len = mounts.length; i < len; i++) {
					
		try {

			bootstrap.temps.verified.push(mounts[i].directory);
			app.use(mounts[i].path, require( path.join(config.paths.apps.root, mounts[i].directory, 'app') ) (config, app) );

		} catch (e) {

			rmIndex = bootstrap.temps.verified.indexOf(mounts[i].directory);
			bootstrap.temps.verified.splice(rmIndex, 1);			

		}
			
	}

	app.listen(config.port);
}

//Iterate over verified mounts and  require each default.js
bootstrap.getControllers = function (app, config)  {
		
	for (var len = bootstrap.temps.verified.length; bootstrap.temps.count < len; bootstrap.temps.count++) {
		
		bootstrap.temps.mounted.push(bootstrap.temps.verified[bootstrap.temps.count]);
		require( path.join(config.paths.apps.root, bootstrap.temps.verified[bootstrap.temps.count], 'controllers', 'default') )(app, config);	
				
	}	

}

module.exports = bootstrap;


