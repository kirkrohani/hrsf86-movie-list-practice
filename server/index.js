const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var db = [
    {title: 'Mean Girls', year: '2002', description: 'its about high school', url:'./images/heart.jpg'},
    {title: 'Hackers', year: '2010', description: 'IT is a stable career path', url:'./images/robo.jpg'},
    {title: 'The Grey', year:'1999', description: 'A coming of age movie', url:'./images/gandalf.jpg'},
    {title: 'Sunshine', year: '2009', description: 'Generally accepted as favorable weather', url:'./images/sun.jpg'},
    {title: 'Ex Machina', year:'2000', description: 'Do Androids Dream of Electric Sheep?', url:'./images/droid.jpg'},
  ];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.route('/movies')
  .get((req, res) => {
    res.send(JSON.stringify(db));
  })
  .post((req, res) => {
    res.send('received POST data');
    db.push(req.body);
  });