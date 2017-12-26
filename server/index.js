const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const getNowPlaying = require('../lib/movieAPI.js')
const axios = require('axios');
const db = require('../database/index.js');

const localhost = 'http://127.0.0.1'
const port = '3000'

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, function () { console.log(`MovieList app listening on port ${port}!`) });


var movieData = [];

app.get('/movies', (req, res) => {

  db.get(console.log);

  if(!movieData.length) {
    // TODO: find something less brittle than hardcoding this URL
    axios.get(`${localhost}:${port}/load`)
      .then(() => res.send(movieData))
      .catch(err => console.log(err));
  } else {
    res.send(movieData);
  }
});

app.post('/movie', (req, res) => {


  var test = { title: 'Star Wars: The Last Jedi',
  poster_path: '/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
  original_title: 'Star Wars: The Last Jedi',
  overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
  release_date: '2017-12-13' }

  db.post(test);

  console.log(req.body);
  // TODO: Update saved info
    // watched, etc
  movieData.push(req.body);
  res.status(201).end()
})

app.get('/load', (req, res) => {
  getNowPlaying(data => {
    movieData = data;
    res.send(movieData);
  })
});