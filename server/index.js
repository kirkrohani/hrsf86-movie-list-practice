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
  movieDB.selectAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send({error: error});
    })
});

app.patch('/movie/:id', function(req, res) {
  movieDB.updateWatched(req.params.id, req.body.watched)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('here', error)
      res.sendStatus(404);   
    })
});

app.post('/movie', function(req, res) {

  movieAPI.getMovieDetails(req.body.title)
    .then((movie) => {
      let filteredObject = _.pick.apply(this, [movie].concat(PICK_MOVIE_ATTRIBUTES));
      movieDB.insertOne(filteredObject);
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(404);     
    })
});


app.get('/load', function(req, res) {
  movieAPI.getNowPlaying()
    .then((movieArray) => { 
      movieDB.insertMany(movieArray);
    })
    .then(() => {
      return movieDB.selectAll();
    })
    .then((results) => {
      console.log('and results: ', results.length);
      res.status(200).send(results);
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send({error: error});
    })
});
