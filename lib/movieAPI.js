var http = require("http");

var getNowPlaying = function(callback) {
  var options = {
    "method": "GET",
    "hostname": "api.themoviedb.org",
    "port": null,
    "path": "/3/movie/now_playing?page=1&language=en-US&api_key=e0efa1c7266c37b97729b566b1383d17",
    "headers": {}
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      callback(JSON.parse(body.toString()));
    });
  });

  req.write("{}");
  req.end();
}  

// var searchForMovie = function(query, callback) {
//   var http = require("https");

//   var options = {
//     "method": "GET",
//     "hostname": "api.themoviedb.org",
//     "port": null,
//     "path": "/3/search/movie?include_adult=false&page=1&query=" + query + "&language=en-US&api_key=e0efa1c7266c37b97729b566b1383d17",
//     "headers": {}
//   };

//   var req = http.request(options, function (res) {
//     var chunks = [];

//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });

//     res.on("end", function () {
//       var body = Buffer.concat(chunks);
//       console.log(body.toString());
//     });
//   });

//   req.write("{}");
//   req.end();
// }

module.exports.getNowPlaying = getNowPlaying;
// module.exports.searchForMovie = searchForMovie;