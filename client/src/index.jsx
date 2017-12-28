import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
var http = require('http');

var movies = [];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      view: false
    }
  }

  getMovieData() {
    var req = http.get('http://127.0.0.1:3000/load', (res) => {
      var rawData = '';
      res.on('data', function(chunk) {
        rawData += chunk
      })
      res.on('end', () => {
        var parsedData = JSON.parse(rawData);
        movies = parsedData.results;
        this.setState({
          movies: movies,
          view: this.state.view
        })
      })
    });

    req.on('error', (e) => {
      console.error('Error: ', e.message)
    });
  }

  postMovieData(movie, callback) {
    fetch('http://127.0.0.1:3000/movies', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    callback();
  }

  patchMovieData(id, callback) {
    fetch('http://127.0.0.1:3000/movies', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    });
    callback();
  }

  componentDidMount() {
    this.getMovieData();
  }

  handleSearch(query, event, callback) {
    event.preventDefault();
    var matchingMovies = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title.toLowerCase().includes(query.toLowerCase())) {
        matchingMovies.push(this.state.movies[i]);
      }
    }
    if (matchingMovies.length) {
      this.setState({
          movies: matchingMovies
      });
    } else {
      alert('No results found for ' + query + '!');
    }  
    callback();
  }

  handleAddition(movieTitle, event, callback) {
    event.preventDefault();

    var newMovie = {
      id: 1,
      title: movieTitle,
      watched: false,
      details: {year: 'not available', runtime: 'not available', 'RT Score': 'not available', 'box office': 'not available'}
    }

    this.postMovieData(newMovie, this.getMovieData.bind(this));

    callback();
  }

  toggleWatched(movieId) {
    var updatedMovies = JSON.parse(JSON.stringify(this.state.movies));
    updatedMovies[movieId].watched = !updatedMovies[movieId].watched;
    // this.patchMovieData(movieId, this.getMovieData.bind(this));
    this.setState({
      movies: updatedMovies,
      view: false
    });
  }

  viewCompleted() {
    this.setState({
      movies: this.state.movies,
      nextMovieId: this.state.nextMovieId,
      view: true
    });
  }

  viewToWatch() {
    this.setState({
      movies: this.state.movies,
      nextMovieId: this.state.nextMovieId,
      view: false
    });
  }

  render() {
    console.log(this.state.movies);
    return (
      <div>
        <Search handleSearch={this.handleSearch.bind(this)} />
        <AddMovie handleAddition={this.handleAddition.bind(this)} />
        <table>
          <tr>
            <th id="moviesToWatch" className={!this.state.view ? 'selected' : ''} onClick={this.viewToWatch.bind(this)}> To Watch </th>
            <th id="moviesCompleted" className={this.state.view ? 'selected' : ''} onClick={this.viewCompleted.bind(this)}> Completed </th>
          </tr>
          {this.state.movies.map( (movie) => 
            // this.state.view === movie.watched ? <Movie movie={movie} handleToggleWatched={this.toggleWatched.bind(this)} /> : null
            <Movie movie={movie} handleToggleWatched={this.toggleWatched.bind(this)} />
          )}
        </table>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
