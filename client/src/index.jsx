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
    	noMovies: false,
    	showWatched: true,
    }
  }

  componentDidMount() {
    this.onLoad();
  }

  onLoad() {
    $.ajax({
      url: 'http://127.0.0.1:3000/load',
      method: 'GET',
      success: (data) => {
        console.log('Successful on load!', data);
        this.setState({
          movieList: data,
        })
      },
      error: (error) => {
        console.log('Error on load!', error);
      },
    })
  }

  getRequest() {
    $.ajax({
      url: 'http://127.0.0.1:3000/messages',
      method: 'GET',
      success: (data) => {
        var movies = data;
        this.setState({
          movieList: movies,
        })
      },
      error: (error) => {
        console.log('This is the error', error);
      }
    })
  }

  postRequest(data) {
    $.ajax({
      url:'http://127.0.0.1:3000/messages',
      method: 'POST',
      data: data,
      success: (data) => {
        console.log('Successful post!', data);
        this.setState({
          movieList: data
        })
      },
      error: (error) => {
        console.log('This is the error', error);
      }
    })
  }

  // DONE
  onSearchClick() {
  	var query = document.getElementById("searchBar").value.trim();
  	document.getElementById("searchBar").value = '';
  	var newMovieList = this.state.movieList;
  	newMovieList = newMovieList.filter((movie) => movie.title.indexOf(query) >= 0);
  	if(newMovieList.length == 0) {
  		this.setState({
  			movieList: newMovieList,
  			noMovies: true,
  		})
  	} else {
  		this.setState({
  			movieList: newMovieList,
  		})
  	}
  }

  // DONE
  goBack() {
    this.getRequest();
    this.setState({
      noMovies: false,
    })
  }

  showWatched() {
    this.setState({
      showWatched: true,
    })
  }

  showUnWatched() {
    this.setState({
      showWatched: false,
    })
  }

  toggleWatched(toggleMovie) {
  	toggleMovie.watched = toggleMovie.watched ? !toggleMovie.watched : true;
    this.postRequest(toggleMovie)
  }

  // DONE
  onAddMovie() {
    var newMovie = {};
    var newMovieString = document.getElementById('newMovie').value.trim();
    newMovie.title = newMovieString;
    this.postRequest(newMovie);
  }

  render() {
    return (
      <div>
      	<div>
      		<AddMovie onAddMovie={this.onAddMovie.bind(this)} movies={this.state.movieList} />
      	</div>
      	<div>
      		<Search onSearchClick={this.onSearchClick.bind(this)} movies={this.state.movieList} />
      	</div>
      	<div className="movieList">
      		<button onClick={this.showWatched.bind(this)}>Watched</button> <button onClick={this.showUnWatched.bind(this)}>To Watch</button>
      		<div><Movie movies={this.state.movieList} toggleWatched={this.toggleWatched.bind(this)} showWatched={this.state.showWatched}/>{this.state.watchedMovie}</div>
      	</div>
      	<div>
      		{this.state.noMovies ? <button id="goBackButton" onClick={this.goBack.bind(this)}>Go Back?</button> : null}
      	</div>
      </div>
    )
  }



};

ReactDOM.render( <MovieList />, document.getElementById('app'));

