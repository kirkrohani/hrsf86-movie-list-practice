const axios = require ('axios');
var API_KEY = require('./api_key.js');

var initialLoad = function(callback) {
  axios.get('https://api.themoviedb.org/3/movie/now_playing', {
    params: {
      page: '1',
      language: 'en-US',
      api_key: API_KEY
    }
  })
    .then(response => {
      callback(response.data.results);
    })
    .catch(error => {
      console.error(error);
    });
};

var searchMovie = function(query, callback) {
  axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      include_adult: 'false',
      page: '1',
      query: query,
      language: 'en-US',
      api_key: API_KEY
    }
  })
    .then(response => {
      callback(response.data.results);
    })
    .catch(error => {
      console.error(error);
    });
}

module.exports.initialLoad = initialLoad;
module.exports.searchMovie = searchMovie;