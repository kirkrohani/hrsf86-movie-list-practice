const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


// this is the express server as per their docs. already set up upon cloning
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

movies = [
		  {title: 'Mean Girls'},
		  {title: 'Hackers'},
		  {title: 'The Grey'},
		  {title: 'Sunshine'},
		  {title: 'Ex Machina'},
	    ];

app.route('/movies')
  .get(function(req, res) {
    res.json(movies)
   });

app.route('/movie')
  .post(function(req, res) {
    req.json(req.body)
  });

app.route('/load')
  .get(function(req, res) {
  	movies.push(res.json())
  })

module.exports = app;

