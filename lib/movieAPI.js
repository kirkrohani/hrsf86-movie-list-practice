const axios = require('axios');
const keys = require('./api_key.js');

// keys.MOVIE_API_KEY
// region US

module.exports = {
  getNowPlaying: (callback) => {
    axios({
      method:'get',
      url:'https://api.themoviedb.org/3/movie/now_playing',
      params: {
        region: 'US',
        api_key: keys.MOVIE_API_KEY,
      }
    })
    .then((response) => {
      // console.log('back from teh DB --->', response.data.results);
      callback(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    })
  },

  getMovieDetails: (title, callback) => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: title, 
        api_key: keys.MOVIE_API_KEY
      }
    })
    .then((response) => {
      callback(null, response.data.results[0]);
    })
    .catch((error) => {
      console.log(error);
    })

  }
}
