import React from 'react';

const MovieDetails = (props) => (
  <div className='details'>
    <p>Year: {props.movie.year}</p>
    <p>Rating: {props.movie.rating}</p>
  </div>
)

export default MovieDetails;
