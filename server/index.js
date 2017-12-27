const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var movies = {movies: [
  {title: 'Mean Girls', director: 'some director0', year: 1980, watched: false, showPanel: false},
  {title: 'Hackers', director: 'some director1', year: 1981, watched: false, showPanel: false},
  {title: 'The Grey', director: 'some director2', year: 1982, watched: false, showPanel: false},
  {title: 'Sunshine', director: 'some director3', year: 1983, watched: false, showPanel: false},
  {title: 'Ex Machina', director: 'some director4', year: 1984, watched: false, showPanel: false}
]};
// app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/movies', (req, res) => res.send(
  JSON.stringify(movies)
));

app.post('/movie', (req, res) => {
  console.log('post req.body:', req.body);
  movies.movies.push(req.body);
  res.send('Got a POST request')
});
