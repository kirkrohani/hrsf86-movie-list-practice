import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import AddMovie from './components/AddMovie.jsx';
import Search from './components/Search.jsx';
import $ from 'jquery';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	movieList: [],
    	showWatched: false,
    	emptyList: false,
    }
  }

  componentDidMount() {
  	this.initialRender();
  }

  initialRender() {
  	$.ajax({
  		url: 'http://127.0.0.1:3000/load',
  		method: 'GET',
  		success: (data) => {
  			console.log('SUCCESSFUL INITIAL RENDER', data);
  			this.getMovies();
  		},
  		error: (error) => {
  			console.log('UNSUCCESSFUL INITIAL RENDER', error);
  		} 
  	})
  }

  getMovies() {
  	$.ajax({
  		url: 'http://127.0.0.1:3000/movies',
  		method: 'GET',
  		success: (data) => {
  			console.log('SUCCESSFUL GET', data);
  			this.setState({
  				movieList: data
  			})
  		},
  		error: (error) => {
  			console.log('UNSUCCESSFUL GET', error);
  		}
  	})
  }

  postMovie(data) {
  	$.ajax({
  		url: 'http://127.0.0.1:3000/movie',
  		method: 'POST',
  		data: data,
  		success: (results) => {
  			console.log('SUCCESSFUL POST', results);
  			this.getMovies();
  		},
  		error: (error) => {
  			console.log('UNSUCCESSFUL POST', error);
  		}
  	})
  }

  toggleMovie(toggledMovie) {
  	this.postMovie(toggledMovie);
  }

  changedToWatched() {
  	this.setState({
  		showWatched: true,
  	})
  }

  changedToUnwatched() {
  	this.setState({
  		showWatched: false,
  	})
  }

  onAddMovie() {
  	var query = document.getElementById('addMovieField').value.trim();
  	var movie = {};
  	movie.title = query;
  	movie.watched = false;
  	this.postMovie(movie);
  }

  onSearchMovie() {
  	var query = document.getElementById('searchMovieField').value.trim();
  	var newMovieList = [];
  	this.state.movieList.filter((movies) => {
  		if(movies.title.indexOf(query) >= 0) {
  			newMovieList.push(movies);
  		}
  	})
  	if(newMovieList.length === 0) {
  		this.setState({
  			movieList: newMovieList,
  			emptyList: true
  		})
  	} else {
	  	this.setState({
	  		movieList: newMovieList
	  	})	
  	}
  }

  goBack() {
  	this.getMovies();
  	this.setState({
  		emptyList: false
  	})
  }

  render() {
    return (
      <div>
      	<div><AddMovie onAddMovie={this.onAddMovie.bind(this)} /></div>
      	<div><Search onSearchMovie={this.onSearchMovie.bind(this)}/></div>
      	<button onClick={this.changedToWatched.bind(this)}>Watched</button><button onClick={this.changedToUnwatched.bind(this)}>To Watch</button>
      	<div>{this.state.showWatched ? this.state.movieList.filter((movie) => movie.watched).map((movie, index) => <Movie movie={movie} key={index} toggleMovie={this.toggleMovie.bind(this)}/>) : 
      	this.state.movieList.filter((movie) => !movie.watched).map((movie, index) => <Movie movie={movie} key={index} toggleMovie={this.toggleMovie.bind(this)}/>)}</div>
      	<div>{this.state.emptyList ? <button onClick={this.goBack.bind(this)}>Go Back?</button> : null}</div>
      </div>      
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
