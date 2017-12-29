const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
var movies = [
  {title: 'Mean Girls', description : 'descrptive stuff'},
  {title: 'Hackers', description : 'descrptive stuff'},
  {title: 'The Grey', description : 'descrptive stuff'},
  {title: 'Sunshine', description : 'descrptive stuff'},
  {title: 'Ex Machina', description : 'descrptive stuff'},
];
app.get('/movies', function(req, res) {
  res.json((movies))
})
// app.post()
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




