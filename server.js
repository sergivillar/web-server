var express = require('express');
var app = express();
var SERVER_PORT = 3000;

var middleware = {
	requireAuthentication: function (request, response, next) {
		console.log("Private route hit");
		next();
	},
	logger: function (request, response, next) {
		console.log('Request: ' + request.method + ' ' + request.originalUrl + '( ' + new Date().toString() + ' )');
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
	response.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(SERVER_PORT, function () {
	console.log("Express server started. Port: " + SERVER_PORT);
});