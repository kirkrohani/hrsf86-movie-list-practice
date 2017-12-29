import React from 'react';

var MovieDetails = (props) => {
  return (
     <div 
      className='movieDetails show'>
      <ul>
        <li><strong>Year</strong>: {props.year}</li>
        <li><strong>Rating</strong>: {props.rating}</li>
        <li><strong>Overview</strong>: {props.overview}</li>
        <img src={props.thumbnail} />
      </ul>
    </div>
  )
}

module.exports = MovieDetails;