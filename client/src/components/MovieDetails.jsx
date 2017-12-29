import React from 'react';
import ReactDOM  from 'react-dom';

var MovieDetails = ({movie}) => (
  <tr>
    <ul>
      <li><b>Release Date:</b> {movie.release_date}</li>
      <li><b>Rating:</b> {movie.vote_average}</li>
      <li><b>Overview:</b> {movie.overview}</li>
      <li><img src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} /></li>
    </ul>
  </tr>
)

module.exports.MovieDetails = MovieDetails;