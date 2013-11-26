var	env = process.env.NODE_ENV || 'development',
	express = require('express'),
	config = {},
	bootstrap;

//Returns the config obj.development
config = require(__dirname + '/config.json')[env];

//Augments the config obj with env : development
config.env = env;

//Require the paths function 
config.paths = require(__dirname + '/core/paths')(__dirname);

//Using our paths require the mounts.json
config.mounts = require(config.paths.apps.mounts);

//Using our paths require the mounts.json
bootstrap = require(config.paths.core.bootstrap);

//Pass express and config to bootstrap and load all mounts

//bootstrap.loadMounts(express(), config);

app = express();

app.listen(config.port);

bootstrap.sortMounts(config.mounts);

