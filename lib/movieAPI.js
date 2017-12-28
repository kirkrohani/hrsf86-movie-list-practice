var API_KEY = '8a343115b6a3caa3c1a3663a7d65446a';

var movieDb = {};

movieDb.endPoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=8a343115b6a3caa3c1a3663a7d65446a&language=en-US&page=1`;

movieDb.getMovieData = (endPoint = movieDb.endPoint) => {
    console.log(endPoint);
    fetch(endPoint)
    .then((response) => {
        return response.json();
      })
    .then((rJson)=>{
        console.log(rJson.results);
      })
      .catch((err) => console.error('request failed'));
  };

export default movieDb;