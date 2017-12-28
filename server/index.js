const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var sampleData = require('../client/exampleMovieData.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

// console.log(sampleData.exampleMovieData)

app.get('/movies', function(req,res) {
  res.json(sampleData.exampleMovieData);
  console.log('inside movies get express function')
});

app.post('/movie', function(req, res) {
  console.log('inside movies post express function')
})


