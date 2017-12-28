import React from 'react';
import MovieDetails from './MovieDetails.jsx';

const Movie = (props) => {
	console.log('REEEEEEEEEEEE', props);
	return (
		<div>
			<div>
				<div>
				{props.showWatched ? props.movies.filter((movie) => movie.watched === 1).map((movie, index) => 
					<MovieDetails movie={movie} key={index} toggleWatched={props.toggleWatched}/>) : 
				props.movies.filter((movie) => movie.watched === 0).map((movie, index) => 
					<MovieDetails movie={movie} key={index} toggleWatched={props.toggleWatched}/>
						)}
				</div>
			</div>
		</div>
	);
};

export default Movie;