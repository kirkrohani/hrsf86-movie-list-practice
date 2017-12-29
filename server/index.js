const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var getMoviesFromAPI = require('../lib/movieAPI.js')
var db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

var movies = [];

getMoviesFromAPI.getNowPlaying(
  function(body) {
    for (var i = 0; i < body.results.length; i++) {
      var movie = body.results[i];
      movies.push([
        movie.title,
        movie.release_date,
        movie.vote_average,
        movie.overview,
      ]);
    }

    db.insertMany(movies, (err) => {
      if(err) {
        console.log('Error inserting to DB: ', err);
      } else {
        console.log('Successfully inserted data into DB!');
      }
    });
  }  
);

app.get('/movies', (req, res) => {
  db.selectAll( (err, movies) => {
    if(err) {
      console.log('Error selecting from DB: ', err);
    } else {
      console.log('Successfully retrieved data from DB!');
      res.send(JSON.stringify(movies));
    }
  });
})

// app.get('/load', (req, res) => {
//   db.selectAll( (err, movies) => {
//     if(err) {
//       console.log('Error selecting from DB: ', err);
//     } else {
//       console.log('Successfully retrieved data from DB!');
//       res.send(JSON.stringify(movies));
//     }
//   });
// })

app.post('/movies', (req, res) => {
  var newMovie = [
    req.body.movieTitle,
    'n/a',
    0.0,
    'n/a'
  ];
  db.insertOne(newMovie, (err) => {
    if(err) {
      console.log('Error inserting to DB: ', err);    
    } else {
      console.log('Successfully inserted data into DB: ');
    }
  });
})

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




