module.exports = function (app) {

	app.get('/', function (request, response) {
		response.render('home');
	});

	app.get('/contact', function (request, response) {
		response.send('CONTACT route for PWS');
	});

	console.log('Initialised ' + app.locals.appId + ' Controllers');

}
