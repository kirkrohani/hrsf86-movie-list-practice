const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const expressHelpers = require('/express-helpers.js');
const databaseHelpers = require('/database-helpers.js');

//routers - acceptable path options

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!  Thanks!') });

app.get('/movies', expressHelpers.movies.get);
app.post('/movies', expressHelpers.movies.post);


//right now I'm passing movie objects around the client side.
//We need to set up the following:
    //Set up acceptable "routes" to use to handle requests,
        //We need to get data, From the "database"
        //we need to post data, into the "database"


