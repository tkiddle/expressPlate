// Paths for the core application
module.exports = function (baseDir) {

	var paths = {};

	paths.root = baseDir;

	paths.apps = {};
	paths.apps.root = paths.root + '/apps/';
	paths.apps.mounts = paths.apps.root + 'mounts.json';

	paths.apps.shared = paths.apps.root + 'shared/';

	paths.core = {};
	paths.core.root = paths.root + '/core/';
	paths.core.bootstrap = paths.core.root + 'bootstrap.js';

	return paths;

};
