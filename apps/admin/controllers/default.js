module.exports = function (app) {
	
	app.get('/', function (request, response) {
		response.send('home page from admin');
	});

	app.get('/user', function (request, response) {
		response.send('home page from admin - USER');
	});

}