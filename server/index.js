const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var movieAPI = require('../lib/movieAPI.js');

//// HARD CODE DATA ////
var movies = [];

app.use(bodyParser.json());

app.get('/load', function(request, response) {
  movieAPI.initialLoad(function(result) {
    movies = result;
    response.send(result);
  })
})

app.get('/movies', function(request, response) {
  response.send(movies);
});

app.post('/movies', function(request, response) {
  console.log('request body: ', request.body.string);
  movieAPI.searchMovie(request.body.string, function(result) {
    movies.push(result[0]);
    response.send('posted');
  })

})

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




