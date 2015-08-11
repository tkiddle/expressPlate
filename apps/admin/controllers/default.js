module.exports = function (app, config) {

	app.get('/', function (request, response) {
		response.render('test');
	});

	app.get('/user', function (request, response) {
		response.send('USER route for ADMIN app');
	});

	console.log('Initialised ADMIN Controllers');

}
