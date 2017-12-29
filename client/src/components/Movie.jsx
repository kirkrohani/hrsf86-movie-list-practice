import React from 'react';
import ReactDOM  from 'react-dom';

const Movie = (props) => (
	<div>{props.movies.map((movie) => {
		return <div key={movie.title}>{movie.title} {movie.overview}
	    </div>
	})}</div>
);

export default Movie;