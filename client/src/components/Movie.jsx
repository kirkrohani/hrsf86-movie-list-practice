import React from 'react';
import MovieDetails from './MovieDetails.jsx'

class Movie extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  isWatched: false,
  	  isClicked: false
  	}
  }

  toggleWatchButton() {
  	this.setState((prevState) => {
  		return {isWatched: !prevState.isWatched};
  	});
  }

  renderMovieDetails() {
  	// render details elements 
  	console.log('here')
  	this.setState((prevState) => {
  		return {isClicked: !prevState.isClicked};
  	});
  }

  render() {
  	let isWatched = this.state.isWatched;
  	let isClicked = this.state.isClicked;
  	var button = null;
  	var displayDiv = null;

  	if (this.props.watchedMoviesShown === 'neither') {
  	  if (isWatched) {
  	  	 button = <button className = 'watchedButton' onClick = {() => this.toggleWatchButton()}> Watched </button> ; 
  	  } else {
  		button = <button onClick = {() => this.toggleWatchButton()}> To Watch </button> ;   	
  	  }

  	  if (isClicked) {
  	  	displayDiv = <div className = 'movieEntry' onClick = {() => this.renderMovieDetails()}> 
	      {this.props.movie.title} <div className = 'watchedDiv'> {button} </div>
	      <MovieDetails movie = {this.props.movie}/> 
	    </div>
  	  } else {
  	  	displayDiv = <div className = 'movieEntry' onClick = {() => this.renderMovieDetails()}> 
	      {this.props.movie.title} <div className = 'watchedDiv'> {button} </div>
	    </div>
  	  }

  	  return (
	  	displayDiv
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
    	   button = <button onClick = {() => this.toggleWatchButton()}> To Watch </button> ;
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