const API_KEY = 'c78d3c2be0aba3053a882190076db882';
const request = require('request');
// var searchTMDb = function(query){
//   $.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`, {
//     key: API_KEY,
//     part: snippet
//   })
//   .done(({items}) =>{
//     if (callback) {
//       callback(items);
//     }
//     console.log('success items: ', items)
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.log(err)
//       );
//   });
  
// };
exports.searchTMDb = function(callback) {
  request(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`, {json: true}, (err, res, body) =>{
    if (err) {
      return console.log('error: ', err)
    }
    callback(body.results)
    }) 
}

