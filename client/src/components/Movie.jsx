import React from 'react';
import ReactDOM  from 'react-dom';

var Movie = ({movie}) => (
    <tr>
      <td id="movie-title">{movie.title}</td>
    </tr>
);

module.exports.Movie = Movie;