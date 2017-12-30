import React from 'react';
import ReactDOM from 'react-dom';

const MovieDetails = (props) => {
	return (
		<div>
		<div>Description: {props.movie.description}</div>
		<div>Popularity: {props.movie.popularity}</div>
		<div>Watched: {props.movie.watched}<button onClick={() => props.toggleMovie(props.movie)}></button></div>
		</div>
	)
}

export default MovieDetails;