import React from 'react';
import ReactDOM  from 'react-dom';

const sampleData = require('../exampleMovieData.js');
var MovieComponent = require('./components/Movie.jsx');
var SearchComponent = require('./components/Search.jsx');
var AddMovieComponent = require('./components/AddMovie.jsx');

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentMovies: [],
    }
  }

  componentDidMount() {
    this.setState({
      movies: this.props.movies,
      currentMovies: this.props.movies
    })
  }

  handleMovieSearch(searchValue) {
    var moviesList = this.state.movies;
    var filteredList = moviesList.filter(function(movie) {
      return movie.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (filteredList.length) {
      this.setState({
        currentMovies: filteredList
      });
    } else {
      this.setState({
        currentMovies: this.state.movies
      })
      window.alert('Movie list doesn\'t contain any matches, please try a different search.');
    }
  }

  handleMovieTitleAdd(titleText) {
    var moviesList = this.state.movies;
    moviesList.push({title: titleText});
    this.setState({
      movies: moviesList,
      currentMovies: moviesList
    })
  }

  handleWatchedClick(){
    var watchedMovies = this.state.movies.filter(movie => movie.watched)
    this.setState({currentMovies: watchedMovies})
  }

  handleToWatchClick(){
    var toWatchMovies = this.state.movies.filter(movie => !movie.watched)
    this.setState({currentMovies: toWatchMovies})
  }

  render() {
    return (
      <div>
        <h3>Movie List</h3>
        <div id="add-movie">
          <AddMovieComponent.AddMovie
            handleMovieTitleAdd={this.handleMovieTitleAdd.bind(this)}
          />
        </div>
        <div id="search-movies">
          <SearchComponent.Search 
            handleMovieSearch={this.handleMovieSearch.bind(this)}
          />
        </div>
        <button class="watch-to-watch" onClick={() => this.handleWatchedClick()}>Watched</button>
        <button class="watch-to-watch" onClick={() => this.handleToWatchClick()}>To Watch</button>

        <table>
          <tbody>
            {
              this.state.currentMovies.map((movie, index) =>           
                <MovieComponent.Movie
                  key={index}
                  movie={movie}
                />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={sampleData.exampleMovieData}/>, document.getElementById('app'));
