import React from 'react';

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false,
		};
	}
	
	render() {
		return (
			<div>
			<button id="title" onClick={(e) => this.setState({showDetails: !this.state.showDetails})}>{this.props.movie.title}</button>
				<div className="movieDetails">
					<div id="year">{this.state.showDetails ? ('Release Date: ' + this.props.movie.release_date) : null}</div>
					<div id="runtime">{this.state.showDetails ? ('Description: ' + this.props.movie.overview) : null}</div>
					<div id="metascore">{this.state.showDetails ? ('Popularity: ' + this.props.movie.popularity) : null}</div>
					<div id="imdbRating">{this.state.showDetails ? ('Rating: ' + this.props.movie.vote_average) : null}</div>
					<div id="watched">{this.state.showDetails ? ('Watched: ' ) : null}
					{this.state.showDetails ? <button onClick={() => this.props.toggleWatched(this.props.movie)}></button> : null}</div>
				</div>
			</div>
		);
	}

};

export default MovieDetails;