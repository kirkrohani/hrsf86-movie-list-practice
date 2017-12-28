const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


var router = require('express').Router();

var movieList = {
  get: function(req, res) {
      console.log('recieve get!')
      res.json(movies)
    },
  post: function(req, res) {
    // var params = [req.body[title], req.body[year], req.body[MetaScore]];
    console.log('request body', req.body)
    if (!req.body) {
       res.sendStatus(400)
     }
    var params = {
      title: req.body['title'],
      year: req.body['year'],
      MetaScore: req.body['MetaScore']
    }

    movies.push(params)
    res.sendStatus(201)
  }
  
}

var movies = [
  {title: 'Mean Girls',
  year: 2003,
  MetaScore: 80},
  {title: 'Hackers',
  year: 1995,
  MetaScore: 46},
  {title: 'The Grey', 
  year: 1986,
  MetaScore: 65},
  {title: 'Sunshine',
  year: 2007,
  MetaScore: 80},
  {title: 'Ex Machina',
  year: 2012,
  MetaScore: 90},
  {title: 'Sam I Am',
  year: 1981,
  MetaScore: 43},
  {title: 'Santa Clause 2',
  years: 1999,
  MetaScore: 20},
  {title: 'Secret Garden',
  year: 1986,
  MetaScore: 59}
];



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/movies', movieList.get)
app.post('/movies', movieList.post)


