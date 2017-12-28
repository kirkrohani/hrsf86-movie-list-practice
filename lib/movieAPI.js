var http = require("http");

var getMoviesFromAPI = function(callback) {
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
      // console.log(body.toString());
      callback(JSON.parse(body.toString()));
    });
  });

  req.write("{}");
  req.end();
}  

module.exports = getMoviesFromAPI;