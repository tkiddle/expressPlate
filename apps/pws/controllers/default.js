module.exports = function (app, config) {

	app.get('/', function (request, response) {
		response.send('home page from pws');
	});

	app.get('/home', function (request, response) {
		response.send('home page from pws - HOME');
	});

}