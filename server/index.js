const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/movies', (req, res) => {
  db.get((movies) => {
    console.log('done with get route. returning', movies.length, 'movies');
    res.send(JSON.stringify(movies));
  });
});

app.get('/load', (req, res) => {
  db.load(() => {
    console.log('done with db load request');
    res.send('done with db load');
  });
});

app.post('/movie', (req, res) => {
  console.log('post req.body:', req.body);
  db.post(req.body, () => {
    console.log('done with post to db');
    res.send('done with db post');
  });
});
