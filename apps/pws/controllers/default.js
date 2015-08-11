module.exports = function (app) {

	app.get('/', function (request, response) {
		response.send('DEFAULT route for PWS');
	});

	app.get('/contact', function (request, response) {
		response.send('CONTACT route for PWS');
	});

	console.log('Initialised PWS Controllers');

}
