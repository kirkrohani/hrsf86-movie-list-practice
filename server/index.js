const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var movies = [
  {title: 'Mean Girls', year: 1999, runtime: '105 min', metascore: 28, imbd: 4.5},
  {title: 'Hackers', year: 2001, runtime: '5 min', metascore: 100, imbd: 1.2},
  {title: 'The Grey', year: 2003, runtime: '98 min', metascore: 1, imbd: 2.0},
  {title: 'Sunshine', year: 1998, runtime: '182 min', metascore: 76, imbd: 6.8},
  {title: 'Ex Machina', year: 2089, runtime: '456 min', metascore: 99, imbd: 11.0},
];


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


// GET method route
app.get('/movies', function (req, res) {
  console.log('Get Request Received');
  res.send(JSON.stringify(movies));
})

// POST method route
app.post('/movies', function (req, res) {
  console.log('Post Request Received')
  movies.push(req.body);
  res.status(200).end();

})

