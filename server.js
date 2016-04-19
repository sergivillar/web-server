var express = require('express');
var app = express();
var SERVER_PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
	response.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(SERVER_PORT, function () {
	console.log("Express server started. Port: " + SERVER_PORT);
});