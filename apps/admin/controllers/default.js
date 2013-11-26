module.exports = function (app, config) {
	
	
	app.get('/', function (request, response) {
		response.send('home page from admin');
	});

	app.get('/user', function (request, response) {
		response.send('home page from admin - USER');
	});


}