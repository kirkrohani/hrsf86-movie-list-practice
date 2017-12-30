import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetails from './MovieDetails.jsx';


class Movie extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			display: false,
		}
	}

	onToggleDisplay() {
		this.setState({
			display: !this.state.display
		})
	}

	render() {
		return (
			<div>
				<div><button onClick={this.onToggleDisplay.bind(this)}>{this.props.movie.title}</button></div>
				<div>{this.state.display ? <div><MovieDetails movie={this.props.movie} toggleMovie={this.props.toggleMovie.bind(this)}/></div> : null}</div>
			</div>
		)
	}
}

export default Movie;