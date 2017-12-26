import React from 'react';

class Movie extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  isWatched: false
  	}
  }

  toggleWatchButton() {
  	this.setState((prevState) => {
  		return {isWatched: !prevState.isWatched};
  	});
  }

  render() {
  	const isWatched = this.state.isWatched;
  	var button = null;
  	if (isWatched) {
  	  button = <button className = 'watchedButton' onClick = {() => this.toggleWatchButton()}> Watched </button> ;
  	} else {
  	  button = <button className = 'notWatchedButton' onClick = {() => this.toggleWatchButton()}> Not Watched </button>
  	}
  	return (
  	  <div className = 'movieEntry'> 
		{this.props.movie.title} <div className = 'watchedDiv'> {button} </div>
	  </div>
  	)
  }
}

export default Movie;