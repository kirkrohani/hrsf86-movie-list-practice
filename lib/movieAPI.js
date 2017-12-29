var API_KEY = '8a343115b6a3caa3c1a3663a7d65446a';
const fetch = require('node-fetch');

var movieDb = {};

movieDb.endPoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=8a343115b6a3caa3c1a3663a7d65446a&language=en-US&page=1`;

exports.getMovieData = (endPoint = movieDb.endPoint) => {   
    return fetch(endPoint)
    .then((response) => {
        return response.json();
      })
    .then((jsonR) => {
        return jsonR.results;
    })
    .catch((err) => console.error('request failed'));
};

