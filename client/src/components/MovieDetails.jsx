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
					<div id="year">{this.state.showDetails ? ('Year: ' + this.props.movie.year) : null}</div>
					<div id="runtime">{this.state.showDetails ? ('Runtime: ' + this.props.movie.runtime) : null}</div>
					<div id="metascore">{this.state.showDetails ? ('Metascore: ' + this.props.movie.metascore) : null}</div>
					<div id="imdbRating">{this.state.showDetails ? ('imdbRating: ' + this.props.movie.imdbRating) : null}</div>
					<div id="watched">{this.state.showDetails ? ('Watched: ' ) : null}
					{this.state.showDetails ? <button onClick={() => this.props.toggleWatched(this.props.movie)}></button> : null}</div>
				</div>
			</div>
		);
	}

};

export default MovieDetails;