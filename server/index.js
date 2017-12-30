const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const API = require('../lib/movieAPI.js')
const dbServer = require('../database/modelIndex.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

let movies = [];
app.get('/load', (req, res) => {
  API.getMovies(function(err, data) {
  	if (err) {
  	  console.log(err)
  	} else {
  	  var movieList = [];
  	  movieList = data.results;
  	  console.log('movielist is', movieList.length);
  	  var dbMovieList = [];
  	  
  	  movieList.forEach((movie) => {
  	  	var dbMovie = [];
  	  	dbMovie.push(movie.title, movie.vote_average, movie.overview);
  	  	dbMovieList.push(dbMovie);
  	  });
  	  console.log('dbMovieList is', dbMovieList.length);
  	  var params = [dbMovieList];
  	  //console.log('PARAMS ARE', params)
  	  dbServer.movies.post(params, function(err, results){
  	  	  // adds all movies in params to the database
  	  	  if (err) {
  	  	  	console.log(err);
  	  	  }
  	  });

  	  dbServer.movies.get(function(err, result) {
  	  	if (err) {
  	  	  console.log(err);
  	  	} else {
  	  		// console.log('here')
  	  		// console.log(result);
  	  	  res.send(result);
  	  	}
  	  });
  	}
  });
});

app.get('/movies', (req, res) => {
  // console.log(movies)
  dbServer.movies.get(function(err, result) {
  	if (err) {
  	  console.log(err);
  	} else {
  	  console.log('successful get from DB');
  	  res.send(result);
  	}
  })
  //res.send(movies)
})

app.post('/movies', (req, res) => {
  // var params = [req.body.title, req.body.vote_average, req.body.overview];
  // dbServer.movies.post(params, function(err, results) {
  // 	if (err) {
  //     console.log(err);
  // 	} else {
  // 	  res.sendStatus(201);
  // 	}
  //})
  movies.push(req.body);
  console.log(movies)
  res.send(movies)
})
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




