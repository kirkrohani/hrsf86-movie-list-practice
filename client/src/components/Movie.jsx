import React from 'react';
import MovieDetails from './MovieDetails.jsx';

const Movie = (props) => {
	return (
		<div>
			<div>
				<div>
				{props.showWatched ? props.movies.filter((movie) => movie.watched === true).map((movie, index) => <MovieDetails movie={movie} key={index} toggleWatched={props.toggleWatched}/>) : props.movies.filter((movie) => movie.watched === false).map((movie, index) => <MovieDetails movie={movie} key={index} toggleWatched={props.toggleWatched}/>)}
				</div>
			</div>
		</div>
	);
};

export default Movie;