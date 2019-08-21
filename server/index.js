const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');

let movies = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


// GET method route
app.get('/movies', function (req, res) {
  console.log('GET /movies Request Received');
  res.send(JSON.stringify(movies));
})

// POST method route
app.post('/movies', function (req, res) {
  console.log('Post Request Received')
  movies.push(req.body);
  res.status(200).end();
})

app.get('/load', function (req, res) {
  console.log('GET /load request');

  movieAPI.apiCall()
  .then( (movies) => {
    let moviesArr = JSON.parse(movies).results
    movies = moviesArr;
    res.send(JSON.stringify(movies));
  });
})


