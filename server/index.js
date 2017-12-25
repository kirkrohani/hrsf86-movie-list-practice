const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Our Initial Data
var movies = [
  {title: 'Mean Girls', year: 1995, runtime: '107 min', metascore: 46, imdbRating: 6.2, watched: false},
  {title: 'Hackers', year: 1996, runtime: '101 min', metascore: 41, imdbRating: 6.1, watched: false},
  {title: 'The Grey', year: 1997, runtime: '102 min', metascore: 42, imdbRating: 6.2, watched: false},
  {title: 'Sunshine', year: 1998, runtime: '103 min', metascore: 43, imdbRating: 6.3, watched: false},
  {title: 'Ex Machina', year: 1999, runtime: '104 min', metascore: 44, imdbRating: 6.4, watched: false},
];

// OUR GET AND POST RESPONSES
app.get('/messages', function(req, res) {
	res.send(movies);
});

app.post('/messages', function(req, res) {
	var matchingArray = [];
	for(var i = 0; i < movies.length; i++) {
		matchingArray.push(movies[i].title);
	}
	if(matchingArray.indexOf(req.body.title) >= 0) {
		movies[matchingArray.indexOf(req.body.title)].watched = !movies[matchingArray.indexOf(req.body.title)].watched;
		res.json(movies);
	} else {
		req.body.watched = false;
		movies.push(req.body);
		res.json(movies);
	}
	
});


app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




