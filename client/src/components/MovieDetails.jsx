import React from 'react';
import ReactDOM  from 'react-dom';

var MovieDetails = ({movie}) => (
  <td>
    <ul>
      <li>Year: {movie.year}</li>
      <li>Runtime: {movie.runtime}</li>
      <li>ImdbRating: {movie.imdbRating}</li>
    </ul>
  </td>
)

module.exports.MovieDetails = MovieDetails;