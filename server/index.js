const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MovieAPI = require('../lib/movieAPI.js');
const movieDB = require('../database/index.js');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3005, function () { console.log('MovieList app listening on port 3005!') });

var movies = [
  {title: 'Mean Girls',
   description: 'blahbabhabhsdf',
   released: '1997',
   stars: '4'},
  {title: 'Hackers',
   description: 'blahbabhabhsdf',
   released: '1997',
   stars: '2'},
  {title: 'The Grey',
   description: 'blahbabhabhsdf',
   released: '1998',
   stars: '3'},
  {title: 'Sunshine',
   description: 'blahbabhabhsdf',
   released: '1987',
   stars: '1'},
  {title: 'Ex Machina',
   description: 'blahbabhabhsdf',
   released: '1999',
   stars: '4'},
];

// var addMovie = (movie) => {
//   movies.push(movie)
// }

app.get('/movies', (req, res) => {
  movieDB.selectAll((error, movieData) => {
    if(error) {
      res.status(500).send({error: error})
    } else {
      res.status(200).send(movieData)
    }
  });
});
  //res.send(movies)

app.post('/movie', function(req,res) {
  console.log(res, req)
  res.send('it sent!')
})

app.get('/movieapi', (req, res) => {
  movieAPI.getNewMovie( (err, movies) => {
    if(err) {
      res.send(500, null)
    } else {
      res.send(null, movies)
    }
  })
})







