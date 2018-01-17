const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });



var movies = [
  {title: 'Mean Girls',
   description: 'blahbabhabhsdf',
   released: '1997',
   stars: '4'
  },
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

app.get('/movies', function(req, res){
	res.send(movies)
})
