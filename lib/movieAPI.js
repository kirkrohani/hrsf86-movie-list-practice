const axios = require('axios');

var getNowPlaying = (callback) => {
  axios.get('https://api.themoviedb.org/3/movie/now_playing', {
    params: {
      api_key: '392d831aa07056708c1117247e6b9a37',
      language: 'en-US',
      page: '1'
    }  
  })  
  .then(function(response) {
    callback(response.data.results);
  })
}

module.exports.getNowPlaying = getNowPlaying;