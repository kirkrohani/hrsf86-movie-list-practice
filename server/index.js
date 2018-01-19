const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');
const movieDB = require('../database/index.js');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
// var addMovie = (movie) => {
//   movies.push(movie)
// }

app.get('/load', (req, res) => {
  movieAPI.getMovies((error, movieData) => {
    if(error) {
      res.status(500).send({error:error})
    }
    MovieDB.insetMany(movieData, (error) => {
      if(error){
        res.status(500).send({error: error})
      } else{
        res.status(200).end() 
      }
    });
  });
});

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

app.post('/movie', (req,res) => {
  let userMovie = [req.body.title, 'this is a movie I added', '1111-11-11', 3]
  console.log(req.body.title)
  //var tempInsertion = ['new title', 'awesome', '7654-12-13', 4]
  if(!req.body) {
    res.status(400).send({error: 'NO!'});
  }else {
    movieDB.insertOne(userMovie, (error) => {
      if(error) {
        res.status(500).send({error:error});
      } else {
        res.status(200).end()
      }
    });
  }
})
// app.get('/movieapi', (req, res) => {
//   movieAPI.getNewMovie( (err, movies) => {
//     if(err) {
//       res.send(500, null)
//     } else {
//       res.send(null, movies)
//     }
//   })
// })

app.listen(3005, function () { console.log('MovieList app listening on port 3005!') });
