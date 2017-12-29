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
    var req = http.get('http://127.0.0.1:3000/movies', (res) => {
      var rawData = '';
      res.on('data', function(chunk) {
        rawData += chunk
      })
      res.on('end', () => {
        var movies = JSON.parse(rawData);
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

  componentDidMount() {
    this.getMovieData();
  }

  postMovieData(movieTitle, callback) {
    fetch('http://127.0.0.1:3000/movies', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({movieTitle: movieTitle}),
    });
    callback();
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

    this.postMovieData(movieTitle, this.getMovieData.bind(this));

    callback();
  }

  toggleWatched(movieId) {
    console.log(movieId);
    var updatedMovies = JSON.parse(JSON.stringify(this.state.movies));
    updatedMovies[movieId - 1].watched = !updatedMovies[movieId - 1].watched;
    this.setState({
      movies: updatedMovies,
      view: this.state.view
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
            this.state.view === !!movie.watched ? <Movie movie={movie} handleToggleWatched={this.toggleWatched.bind(this)} /> : null
            // <Movie movie={movie} handleToggleWatched={this.toggleWatched.bind(this)} />
          )}
        </table>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
