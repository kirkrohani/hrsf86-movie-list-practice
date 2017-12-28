const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
let router = express.Router();

var movies = [
  { title: 'Mean Girls', watched: true },
  { title: 'Hackers', watched: true },
  { title: 'The Grey', watched: false },
  { title: 'Sunshine', watched: false },
  { title: 'Ex Machina', watched: true }
];
let loadMovies = (req, res) => {
  // modify
};
let getMovies = (req, res) => {
  console.log('Serving GET request at /movies')
  res.send(movies);
};
let addMovie = (req, res) => {
  console.log('Serving POST request at /movie')
  console.log(req.body);
  // console.log(req)
  res.send()
};

router.get('/movies', getMovies);
router.get('/load', loadMovies);
router.post('/movie', addMovie);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

app.listen(3000, function (){ 
  console.log('MovieList app listening on port 3000!') 
});
