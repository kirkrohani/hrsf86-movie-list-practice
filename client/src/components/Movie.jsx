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
  	this.setState((prevState) => {
  		return {isClicked: !prevState.isClicked};
  	});
  }

  render() {
  	let isWatched = this.state.isWatched;
  	let isClicked = this.state.isClicked;
  	var button = null;
  	var displayDiv = null;

  	if (isWatched) {
  	  button = <button className = 'watchedButton' onClick = {() => this.toggleWatchButton()}> Watched </button> ; 
  	 } else {
  	  button = <button onClick = {() => this.toggleWatchButton()}> To Watch </button> ;   	
  	}

	if (isClicked) {
	  displayDiv = 
	  <div className = 'movieEntry'> 
	    <div onClick = {() => this.renderMovieDetails()}> {this.props.movie.title} </div> 
        <div className = 'watchedDiv'> {button} </div>
        <MovieDetails movie = {this.props.movie}/> 
      </div> 
	 } else {
	   displayDiv = 
	   <div className = 'movieEntry'>
	     <div onClick = {() => this.renderMovieDetails()}> {this.props.movie.title} </div> 
	  	 <div className = 'watchedDiv'> {button} </div>
       </div>
	 }

  	if (this.props.watchedMoviesShown === 'neither') {
  	  return (displayDiv)
  	}

  	if (this.props.watchedMoviesShown === 'yes') {
	  if (isWatched) {
	    return (
	  	  displayDiv
	  	)
	  } else {
        return (
          <div> </div>
        )
	  }
    } else {
    	// render all movies which havent been watched (isWatched: false)
      if (!isWatched) {
	    return (
	  	  displayDiv
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