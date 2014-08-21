module.exports = function (app) {

	app.get('/', function (request, response) {
		response.send('DEFAULT route for BLOG app');
	});

	app.get('/list', function (request, response) {
		response.send('LIST route for BLOG app');
	});

	console.log('Initialised BLOG Contollers');

}