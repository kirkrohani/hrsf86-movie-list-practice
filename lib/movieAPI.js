const config = require('./api_key.js');
const request = require('request-promise');

let apiCall = () => {

  var options = {
    uri: `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.API_KEY}`,
    // qs: {
    //     access_token:`${config.API_KEY}`
    // },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true 
  };

  return (
  request(options)
    .then(function (movies) {
        console.log('Total movies: %d', movies.results.length);
        let returnMovies = JSON.stringify(movies)
        return returnMovies;
    })
    .catch(function (err) {
        console.log('API error occured', err);
    })
  )
}


module.exports.apiCall = apiCall;


