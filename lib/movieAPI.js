const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');
app.use(bodyParser.json());
app.use(express.json());

const request = require('request');

const API_KEY = '65b01757f914db99920eeb18fcce08cd';
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

module.exports = {
  getRequest: (callback) => {
    request(nowPlaying, function(error, response, body) {
      if (error) {
        console.log(error);
      } else {
        callback(JSON.parse(response.body));
      }
    });
  } 
}