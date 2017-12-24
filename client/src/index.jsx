import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import AddMovie from './components/AddMovie.jsx';
import Search from './components/Search.jsx';

var movies = [
  {title: 'Mean Girls', year: 1995, runtime: '107 min', metascore: 46, imdbRating: 6.2, watched: false},
  {title: 'Hackers', year: 1996, runtime: '101 min', metascore: 41, imdbRating: 6.1, watched: false},
  {title: 'The Grey', year: 1997, runtime: '102 min', metascore: 42, imdbRating: 6.2, watched: false},
  {title: 'Sunshine', year: 1998, runtime: '103 min', metascore: 43, imdbRating: 6.3, watched: false},
  {title: 'Ex Machina', year: 1999, runtime: '104 min', metascore: 44, imdbRating: 6.4, watched: false},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	movieList: movies,
    	noMovies: false,
    }
  }

	goBack() {
  	this.setState({
  		movieList: movies,
  		noMovies: false,
  	});
  	document.getElementById("searchBar").value = '';
  }

  onSearchClick() {
  	var query = document.getElementById("searchBar").value.trim();
  	document.getElementById("searchBar").value = '';
  	var newMovieList = movies;
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

  render() {
    return (
      <div>
      	<div>
      		<AddMovie movies={this.state.movieList} />
      	</div>
      	<div>
      		<Search onSearchClick={this.onSearchClick.bind(this)} movies={this.state.movieList} />
      	</div>
      	<div>
      		<Movie movies={this.state.movieList} />
      	</div>
      	<div>
      		{this.state.noMovies ? <button id="goBackButton" onClick={this.goBack.bind(this)}>Go Back?</button> : null}
      	</div>
      </div>
    )
  }



};

ReactDOM.render( <MovieList />, document.getElementById('app'));

