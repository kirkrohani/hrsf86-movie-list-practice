import React from 'react';

const MovieDetails = (props) => (
  <div>
    <h3>Year: {props.movie.year}</h3>
    <h3>Rating: {props.movie.rating}</h3>
  </div>
)

export default MovieDetails;
