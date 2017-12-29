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
      res.status(500).send({error: error});
    } else {
      res.status(200).send(results);
    } 
  })
});

app.patch('/movie/:id', function(req, res) {
  console.log('id', req.params.id, req.body.watched);
  movieDB.updateWatched(req.params.id, req.body.watched, (error, results) => {
    if (error) {
      console.log('here', error)
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    } 
  })
})

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
