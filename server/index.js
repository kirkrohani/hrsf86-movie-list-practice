const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Our Initial Data
var movies = [];

// OUR GET AND POST RESPONSES
app.get('/load', function(req, res) {
	movieAPI.getRequest(function(data) {
		movies = data.results
		movies.forEach((movie) => {
			movie.watched = false;
		});
		res.send(movies)
	});
});

app.get('/messages', function(req, res) {
	res.send(movies);
});

app.post('/messages', function(req, res) {
	var matchingArray = [];
	for(var i = 0; i < movies.length; i++) {
		matchingArray.push(movies[i].title);
	}
	if(matchingArray.indexOf(req.body.title) >= 0) {
		movies[matchingArray.indexOf(req.body.title)].watched = !movies[matchingArray.indexOf(req.body.title)].watched;
		res.json(movies);
	} else {
		req.body.watched = false;
		movies.push(req.body);
		res.json(movies);
	}
	
});


app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




