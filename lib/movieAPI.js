const axios = require('axios');
const keys = require('./api_key.js');

// keys.MOVIE_API_KEY
// region US

var getNowPlaying = (callback) => {
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
}

module.exports = getNowPlaying;