const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//// HARD CODE DATA ////
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'This Means War'}
];

app.use(bodyParser.json());

app.get('/movies', function(request, response) {
  response.send(movies);
});

app.post('/movies', function(request, response) {
  movies.push(request.body);
  response.send('posted');
})

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




