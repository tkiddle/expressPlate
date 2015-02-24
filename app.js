var	env = process.env.NODE_ENV || 'development',
	express = require('express'),
	app = express(),
	path = require('path'),
	config = {},
	bootstrap;

// Returns the config obj.development
config = require(__dirname + '/config.json')[env];

// Augments the config obj with env : development
config.env = env;

// Require the paths function 
config.paths = require( path.join(__dirname, '/core/paths') )(__dirname);

// Using our paths require the mounts.json
config.mounts = require(config.paths.apps.mounts);

// Using our paths require the mounts.json
bootstrap = require(config.paths.core.bootstrap);

// Mount and '.use' all apps in the apps dir
bootstrap.getMounts(app, config);


