module.exports = function (app, config) {
	

	app.get('/home', function (request, response) {
		response.send('home page from pws - HOME');
	});

	app.get('/', function (request, response) {
		response.send('home page from pws');
	});


}