const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


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

app.get('/movies', function(req, res){
	res.send(movies)
})

// app.post('/movie', function(req,res) {
//   console.log(res, req)
//   res.send('it sent!')
// })

app.post('/movie', (req, res) => {
  let newMovie = [req.body.title, 'This is the best movie ever!', '2017-11-11', 0.0, 0, 0];
  res.send('hi')
  if(!req.body) {
    res.status(400).send({ error: 'Bad Request' });
  } else {
    movieDB.insertOne(newMovie, (err) => {
      if(err) {
        res.status(500).send({ error: err });
      } else {
        res.status(201).end();
      }
    });
  }
});










