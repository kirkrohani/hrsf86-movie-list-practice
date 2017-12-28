const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');
const db = require('../database/index.js');
const Promise = require('bluebird');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Our Initial Data

// OUR GET AND POST RESPONSES
app.get('/load', function(req, res) {
	movieAPI.getRequest(function(data) {
		var movies = [];
		movies = data.results
		movies.forEach((movie) => {
			movie.watched = false;
		});
		var sqlMovieList = [];
		movies.forEach((movie) => {
			var sqlMovie = [];
			sqlMovie.push(movie.title, movie.release_date, movie.overview, movie.popularity, movie.vote_average, movie.watched);
			sqlMovieList.push(sqlMovie);
		})
		var parameters = [sqlMovieList];
		db.movies.post(parameters, function(error, result) {
			if(error) {throw error;}
		});
		db.movies.get(function(error, result){
			if(error) {throw error;}
			res.send(result);
		});
	});
});

app.get('/messages', function(req, res) {
	db.movies.get(function(error, result) {
		res.send(result);
	})
});

app.post('/messages', function(req, res) {
	var currentMovieTitles = [];
	db.movies.get(function(error, result){
		if(error) {throw error;}
		result.forEach((movie) => {
			currentMovieTitles.push(movie.title);
		});
		if(currentMovieTitles.indexOf(req.body.title) >= 0) {
			var parameters = req.body.title
			db.movies.toggleWatched(parameters, function(error, result) {
				if(error) {throw error;}
			})
			db.movies.get(function(error, result) {
				res.send(result);
			});
		}
	});
	// for(var i = 0; i < movies.length; i++) {
	// 	matchingArray.push(movies[i].title);
	// }
	// if(matchingArray.indexOf(req.body.title) >= 0) {
	// 	movies[matchingArray.indexOf(req.body.title)].watched = !movies[matchingArray.indexOf(req.body.title)].watched;
	// 	res.json(movies);
	// } else {
	// 	req.body.watched = false;
	// 	movies.push(req.body);
	// 	res.json(movies);
	// }
});


app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




