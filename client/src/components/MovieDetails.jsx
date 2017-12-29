import React from 'react';
import ReactDOM  from 'react-dom';

var MovieDetails = ({movie}) => (
  <td>
    <ul>
      <li>Release Date: {movie.release_date}</li>
      <li>Rating: {movie.vote_average}</li>
      <li>Overview: {movie.overview}</li>
      <li><img src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} /></li>
    </ul>
  </td>
)

module.exports.MovieDetails = MovieDetails;