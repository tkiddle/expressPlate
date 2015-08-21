module.exports = function (app) {

	app.get('/', function (request, response) {
		response.send('DEFAULT route for DEFAULT app');
	});

	console.log('Initialised ' + app.locals.appId + ' Controllers');

}
