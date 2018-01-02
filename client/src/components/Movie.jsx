import React from 'react';
import ReactDOM  from 'react-dom';

class Movie extends React.Component {
  constructor(props) {
  	super(props);
  	
  	// this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
	return (
	<li>{this.props.movie.title} {this.props.movie.overview}
	    <button onClick={() => this.props.handleClick(this.props.movie)}>{movie.watched ? 'watched' : 'unwatched'}</button></li>
	    );
  }
}

export default Movie;