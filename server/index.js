const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');
const movieDB = require('../database/index.js');
const _ = require('underscore');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

const PICK_MOVIE_ATTRIBUTES = ['id', 'vote_average', 'title', 'poster_path', 'overview', 'release_date'];

app.get('/movies', function(req, res) {
  movieDB.selectAll((error, results) => {
    if (error) {
      console.log(error)
    } else {
      res.send(results)
    } 
  })
});

app.post('/movie', function(req, res) {

  movieAPI.getMovieDetails(req.body.title, (error, results) => {
    if (error) { 
      console.log(error);
      res.sendStatus(404);
    } else {

      let filteredObject = _.pick.apply(this, [results].concat(PICK_MOVIE_ATTRIBUTES));

      movieDB.insertOne(filteredObject, (error, results) => {
        if (error) {
          res.sendStatus(404);
          console.log(error)
        } else {
          res.sendStatus(201);
        } 
     });
    }
  });
});

app.get('/load', function(req, res) {
  // console.log('movieapi', movieAPI);
  movieAPI.getNowPlaying((movieArray) => {
   //  movies = movieArray; 
    movieDB.insertMany(movieArray, (error, results) => {
      if (error) {
        console.log(error)
      } else {
        movieDB.selectAll((error, results) => {
          if (error) {
            console.log(error)
          } else {
            res.send(results)
          } 
        })   
      }       
    });
  })
});

// TODO:
// 1. When a user adds a movie, must make a call to the amovie db to get data to insert it. 
// 1. make db_id a unique field so we're not loading new ones all the time