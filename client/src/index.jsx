import React from 'react';
import ReactDOM  from 'react-dom';
import $ from 'jquery';

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
    $.ajax({url: '/load', success: (result) => {
      console.log('inside app...', result);
      this.setState({
        movies: result,
        currentMovies: result
      });
    }});
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
    $.ajax({
      url: '/movie',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({
        moviesList: this.state.movies,
        movieToAdd: {title: titleText}
      }),
      success: (data) => {
        console.log('movie added!');
        this.setState({
          movies: data,
          currentMovies: data
        });
      },
      error: function(data) {
        console.log('error adding movie', data);
      }
    });
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

ReactDOM.render( <MovieList />, document.getElementById('app'));
