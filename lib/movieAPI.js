const axios = require('axios');
const keys = require('./api_key.js');

// keys.MOVIE_API_KEY
// region US

module.exports = {
  getNowPlaying: () => {
    return axios({
      method:'get',
      url:'https://api.themoviedb.org/3/movie/now_playing',
      params: {
        region: 'US',
        api_key: keys.MOVIE_API_KEY,
      }
    })
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return error;
    });
  },

  getMovieDetails: (title) => {
    return axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: title, 
        api_key: keys.MOVIE_API_KEY
      }
    })
    .then((response) => {
      return response.data.results[0];
    })
    .catch((error) => {
      return error;
    });

  }
}
