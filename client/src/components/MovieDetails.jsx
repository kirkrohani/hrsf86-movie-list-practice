import React from 'react';
import ReactDOM  from 'react-dom';

var MovieDetails = ({movie}) => (
  <tr>
    <ul>
      <li><b>Release Date:</b> {movie.release_date}</li>
      <li><b>Rating:</b> {movie.rating}</li>
      <li><b>Overview:</b> {movie.overview}</li>
      <li><img src={'http://image.tmdb.org/t/p/w185/' + movie.image_link} /></li>
    </ul>
  </tr>
)

module.exports.MovieDetails = MovieDetails;