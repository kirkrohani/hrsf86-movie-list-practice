import React from 'react';

const MovieDetails = (props) => (
  <div className='details'>
    <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}/>
    <p>Release Date: {props.movie.release_date}</p>
    <p>Rating: {props.movie.vote_average}</p>
    <p>Overview: {props.movie.overview}</p>
  </div>
)

export default MovieDetails;
