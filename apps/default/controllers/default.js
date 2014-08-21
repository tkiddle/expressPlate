module.exports = function (app) {
	
	app.get('/', function (request, response) {
		response.send('DEFAULT route for ADMIN app');
	});

	app.get('/user', function (request, response) {
		response.send('USER route for ADMIN app');
	});

	console.log('Initialised ADMIN Controllers');

}