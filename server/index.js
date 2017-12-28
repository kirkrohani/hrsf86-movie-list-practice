const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


const movies = [
  {id: 1, title: 'Measn Girlss', year: '1997', rating: '55'},
  {id: 2, title: 'Hackers', year: '2005', rating: '65'},
  {id: 3, title: 'The Grey', year: '1889', rating: '52'},
  {id: 4, title: 'Sunshine', year: '1776', rating: '78'},
  {id: 5, title: 'Ex Machina', year: '42 B.C', rating: '35'},
];

app.get('/movies', function(req, res) {
  res.send(movies)
});

app.post('/movie', function(req, res) {
  var newMovie = {title: req.body.title, year: 'unknown', rating: 'unknown'};
  movies.push(newMovie);
  res.send(201);
});