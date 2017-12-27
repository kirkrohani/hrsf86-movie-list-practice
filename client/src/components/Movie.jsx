import React from 'react';
import details from './MovieDetails.jsx'

let Movie = (props) => {
  console.log(props);
  return (
    <div 
    movie={props.movie}>
    {props.movie.title}
    </div>
  );
}

module.exports = Movie;