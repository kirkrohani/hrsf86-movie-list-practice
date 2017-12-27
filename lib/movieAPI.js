const express = require('express');
const api = express();
const https = require('https');
const bodyParser = require('body-parser');
const APIKey = '6912e0fbf7888a4ed40dc95e916e0fad';
const nowPlayingEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}`;

api.use(bodyParser.json());
api.use(express.json());
api.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = {
  load: (callback) => {
    console.log('called load');
    buffer = [];
    https.get(nowPlayingEndpoint, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);

      res.setEncoding('utf-8');
      res.on('data', function(chunk) {
        buffer.push(Buffer(chunk));
      });
      res.on('end', function() {
        var body = Buffer.concat(buffer).toString();
        var json = JSON.parse(body);
        callback(json);
      });
    }).on('error', (e) => {
      console.error(e);
    });
  }
}
