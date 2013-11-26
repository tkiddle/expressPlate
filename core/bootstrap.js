var path = require('path'),
	bootstrap = {};



bootstrap.sortMounts = function (mounts) {

	var rootApp;

	for (var i = 0, len = mounts.length; i < len; i++) {
		
		if (len > 1) {
			
			if(mounts[i].path === '/') {
					
				rootApp = mounts.splice(i, 1);

				mounts.push(rootApp);

			}

		}

	}

	console.log(mounts);

}





module.exports = bootstrap;


