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
  	if (this.props.watchedMoviesShown === 'neither') {
  	  if (isWatched) {
  	  	 button = <button className = 'watchedButton' onClick = {() => this.toggleWatchButton()}> Watched </button> ; 
  	  } else {
  		button = <button onClick = {() => this.toggleWatchButton()}> Not Watched </button> ;   	
  	  }

  	  return (
	  	<div className = 'movieEntry'> 
	      {this.props.movie.title} <div className = 'watchedDiv'> {button} </div>
	    </div>
	  )
  	}
  	if (this.props.watchedMoviesShown === 'yes') {
	  	if (isWatched) {
	  	  button = <button className = 'watchedButton' onClick = {() => this.toggleWatchButton()}> Watched </button> ;
	  	  return (
	  	    <div className = 'movieEntry'> 
			  {this.props.movie.title} <div className = 'watchedDiv'> {button} </div>
		    </div>
	  	  )
	    } else {
	    	return (
	    		<div> </div>
	    	)
	    }
    } else {
    	// render all movies which havent been watched (isWatched: false)
    	if (!isWatched) {
    	   button = <button onClick = {() => this.toggleWatchButton()}> Not Watched </button> ;
	  	  return (
	  	    <div className = 'movieEntry'> 
			  {this.props.movie.title} <div className = 'watchedDiv'> {button} </div>
		    </div>
	  	  )
	    } else {
	    	return (
	    		<div> </div>
	    	)
	    }	
    }

    }
}

export default Movie;