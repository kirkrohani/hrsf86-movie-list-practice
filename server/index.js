const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const API = require('../lib/movieAPI.js')


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


// let movies = [
//         {title: 'Mean Girls', runtime: '150 minutes', year: 2005},
//         {title: 'Hackers', runtime: '107 minutes', year: 1995},
//   	    {title: 'The Grey', runtime: '112 minutes', year: 2000},
//   	    {title: 'Sunshine', runtime: '92 minutes', year: 1984},
//   	    {title: 'Ex Machina', runtime: '84 minutes', year: 2014},
// 	  ]

app.get('/load', (req, res) => {
  
  API.getMovies(function(err, data) {
  	if (err) {
  	  console.log(err)
  	} else {
  	  //console.log(movies)
  	  let movies = [];
  	  movies = data.results;
  	  console.log('movies is', movies[0])
  	  res.send(movies[0])
  	}
  })

});
app.get('/movies', (req, res) => {
  res.send(movies)
})

app.post('/movies', (req, res) => {
  movies.push(req.body);
  console.log(movies)
  res.send(movies)
})
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




