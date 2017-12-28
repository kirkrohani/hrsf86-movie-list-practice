const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

var movies = [
  {id: 0, title: 'Mean Girls', watched: false, details: {year: '2004', runtime: '97 minutes', 'RT Score': '84%', 'box office': '$129 million'}},
  {id: 1, title: 'Hackers', watched: false, details: {year: '1995', runtime: '107 minutes', 'RT Score': '32%', 'box office': '$7.5 million'}},
  {id: 2, title: 'The Grey', watched: false, details: {year: '2012', runtime: '117 minutes', 'RT Score': '78%', 'box office': '$77.3 million'}},
  {id: 3, title: 'Sunshine', watched: false, details: {year: '2007', runtime: '107 minutes', 'RT Score': '75%', 'box office': '$32 million'}},
  {id: 4, title: 'Ex Machina', watched: false, details: {year: '2015', runtime: '108 minutes', 'RT Score': '93%', 'box office': '$36.9 million'}},
];

app.get('/movies', (req, res) => {
  res.send(JSON.stringify(movies))
})

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




