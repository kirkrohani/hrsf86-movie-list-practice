const movieAPI = require('../lib/movieAPI');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieDB = require('../database/index');

// var db = [
//     {title: 'Mean Girls', year: '2002', description: 'its about high school', url:'./images/heart.jpg'},
//     {title: 'Hackers', year: '2010', description: 'IT is a stable career path', url:'./images/robo.jpg'},
//     {title: 'The Grey', year:'1999', description: 'A coming of age movie', url:'./images/gandalf.jpg'},
//     {title: 'Sunshine', year: '2009', description: 'Generally accepted as favorable weather', url:'./images/sun.jpg'},
//     {title: 'Ex Machina', year:'2000', description: 'Do Androids Dream of Electric Sheep?', url:'./images/droid.jpg'},
//   ];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!');});

app.route('/movies')
  .get((req, res) => {
    // res.send(JSON.stringify(db));
    movieDB.selectAll((err, movieDataFromDB) => {
      if(err) {
        console.log('Error selecting from DB');
      } else {
        res.send(movieDataFromDB);
        console.log('Successfully retrieved data from DB: ' /*,JSON.stringify(movieDataFromDB)*/);
      }
    });
    
  })
  .post((req, res) => {
    movieDB.insertOne(req.body, (err) => {
      err ? console.log(err) : res.send('POST data added to DB!');
    });
  });

app.route('/load')
  .get((req, res) => {
    movieAPI.getMovieData()
    .then((data) =>{
      movieDB.insertMany(data, (err, newData) => {
        err ? console.log('error in insert many') : console.log('API data inserted to DB!');
        res.send(newData);
        return data;
      })
      .catch(err => console.log('error in get request'));
    });
  });