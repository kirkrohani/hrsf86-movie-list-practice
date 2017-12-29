const api_key = require('./api_key');
const axios = require('axios');
const _ = require('lodash');
const imdb = require('imdb-api');

module.exports.getNewMovies = (cb) => {
  let domain = 'https://api.themoviedb.org/3';
  let endpoint = '/movie/now_playing';
  let authString = '?api_key=' + api_key.tmdb;
  axios.get(domain + endpoint + authString)
  .then((res) => {
    cb(res.data.results);
  })
  .catch((err) => {console.log('Error querying TMDb', err);})
};

module.exports.searchMovie = (query, cb) => {
  let domain = 'https://api.themoviedb.org/3';
  let endpoint = '/search/movie';
  let authString = '?api_key=' + api_key.tmdb;
  let q = '&query=' + _.escape(query).replace(/\s/g, '%20');
  // console.log('query', query)
  console.log(q)
  // console.log('_escape()query', _.escape(query))
  axios.get(domain + endpoint + authString + q)
    .then((res) => {
      if (res.data.results.length > 0) {
        console.log(res.data.results[0].id)
        module.exports.getMoreDangDetails(res.data.results[0].id, cb)
      }
      // cb(res.data.results);
    })
    .catch((err) => { console.log('Error querying TMDb', err); })
};

module.exports.getMoreDangDetails = (id, cb) => {
  //because the first query don't give you crap
  let domain = 'https://api.themoviedb.org/3';
  let endpoint = '/movie/' + id.toString();
  let authString = '?api_key=' + api_key.tmdb;
  let etc = '&append_to_response=images';
  axios.get(domain + endpoint + authString + etc)
    .then((resp) => {
      // imdb.getById(resp.data.imdb_id, { apiKey: api_key.imdb, timeout: 30000 })
      imdb.getById(resp.data.imdb_id, { apiKey: 'fixme', timeout: 30000 })
        .then((data) => {
          resp.data.imdb_info = data;
          cb(resp.data);
        })
        .catch((err) => {
          console.log('Error querying IMDB: To reduce API requests, all movies are now Jurassic Park. Rawr!');
          // console.log('Error querying IMDB', err);
          resp.data.imdb_info = dummy;
          cb(resp.data);
        });
    })
    .catch((err) => { console.log('Error querying TMDb', err); });
};




var dummy = {
  title: 'Jurassic Park',
  _year_data: '1993',
  year: 1993,
  rated: 'PG-13',
  released: '1993-06-11T07:00:00.000Z',
  runtime: '127 min',
  genres: 'Adventure, Sci-Fi, Thriller',
  director: 'Steven Spielberg',
  writer: 'Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)',
  actors: 'Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough',
  plot: 'Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island.',
  languages: 'English, Spanish',
  country: 'USA',
  awards: 'Won 3 Oscars. Another 31 wins & 21 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg',
  ratings: 
    [ { Source: 'Internet Movie Database', Value: '8.1/10' },
      { Source: 'Rotten Tomatoes', Value: '92%' },
      { Source: 'Metacritic', Value: '68/100' } ],
  metascore: '68',
  rating: '8.1',
  votes: '695,044',
  imdbid: 'tt0107290',
  type: 'movie',
  dvd: '10 Oct 2000',
  boxoffice: '$45,299,680',
  production: 'Universal City Studios',
  website: 'http://www.jurassicpark.com/maingate_flash.html',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0107290' }