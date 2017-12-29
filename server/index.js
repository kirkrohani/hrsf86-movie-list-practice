const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var getMoviesFromAPI = require('../lib/movieAPI.js')
var db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

var movies = [
  {id: 0, title: 'Mean Girls', watched: false, details: {year: '2004', runtime: '97 minutes', 'RT Score': '84%', 'box office': '$129 million'}},
  {id: 1, title: 'Hackers', watched: false, details: {year: '1995', runtime: '107 minutes', 'RT Score': '32%', 'box office': '$7.5 million'}},
  {id: 2, title: 'The Grey', watched: false, details: {year: '2012', runtime: '117 minutes', 'RT Score': '78%', 'box office': '$77.3 million'}},
  {id: 3, title: 'Sunshine', watched: false, details: {year: '2007', runtime: '107 minutes', 'RT Score': '75%', 'box office': '$32 million'}},
  {id: 4, title: 'Ex Machina', watched: false, details: {year: '2015', runtime: '108 minutes', 'RT Score': '93%', 'box office': '$36.9 million'}},
];

var apiMovies;

getMoviesFromAPI(
  function(body) {
    apiMovies = body;
  }  
);

app.get('/movies', (req, res) => {
  res.send(JSON.stringify(movies))
})

app.get('/load', (req, res) => {
  res.send(apiMovies);
})

app.post('/movies', (req, res) => {
  res.send('POST request received!');
  movies.push(req.body);
})

// app.patch('/movies', (req, res) => {
//   res.send('PATCH request received!')
//   console.log(req.body);
//   movies[req.body].watched = !movies[JSON.parse(req.body)].watched;
// })

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




