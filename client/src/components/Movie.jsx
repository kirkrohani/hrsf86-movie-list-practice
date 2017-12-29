import React from 'react';
import ReactDOM  from 'react-dom';
import MovieDetails from './MovieDetails.jsx';


var Movie = ({movie}) => {
    return (
        <div id={movie.title}> <h2>{movie.title}</h2> <MovieDetails currentMovie = {movie} /> </div>
    ); 
};

module.exports = Movie;
