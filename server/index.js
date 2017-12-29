const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


let movies = [
        {title: 'Mean Girls', runtime: '150 minutes', year: 2005},
        {title: 'Hackers', runtime: '107 minutes', year: 1995},
  	    {title: 'The Grey', runtime: '112 minutes', year: 2000},
  	    {title: 'Sunshine', runtime: '92 minutes', year: 1984},
  	    {title: 'Ex Machina', runtime: '84 minutes', year: 2014},
	  ]


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




