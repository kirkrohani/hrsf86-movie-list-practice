const express = require('express');

const app = express();
exports.app = app;

const bodyParser = require('body-parser');
const path = require('path');
// const router = require('./routes.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




