import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
// import { movies } from './exampleMovieData.js';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import axios from 'axios';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filtered: [],
      watched: [],
      toWatch: [],
      watchedClicked: false,
      toWatchClicked: false
    };
  }
  componentDidMount() {
    this.getMovies();
  }
  searchMovies(input) {
    this.state.list.forEach(movie => {
      if (movie.title.toLowerCase().includes(input)) {
        if (this.state.filtered.indexOf(movie) === -1) {
          this.state.filtered.push(movie);
        }
      }
    });
    this.setState({
      list: this.state.filtered.length === 0 ? [{title: 'Sorry, couldn\'t find any movies! Please try a different title.'}] : this.state.filtered
    });
  }
  getMovies() {
    this.state.list = [];
    console.log('This is the list at beginning of getMovies', this.state.list);
    axios.get('/load')
      .then(() => {
        axios.get('/movies')
        .then(movies => {
          console.log('This is the response data', movies.data);
          this.setState({
            list: movies.data
          });
          console.log('This is the list at end of getMovies', this.state.list);
        })
        .catch(function(error) {
          console.log(error);
        });
      });
  }
  addMovie(movieTitle) {
    axios.post('/movie', { title: movieTitle, release_date: "2017-12-28", overview: "Movie about " + movieTitle, popularity: 9, vote_average: 8 })
      .then(movie => {
        this.state.list.push(movie.data);
        console.log('This is the list ', this.state.list);
        this.setState({
          list: this.state.list
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  toggleWatched() {
    this.state.toWatch = [];
    axios.put('/watched')
      .then(movies => {
        this.setState({
          list: movies.data
        });
      })
    this.state.list.forEach(movie => {
      if (movie.watched === 'Yes') {
        this.state.watched.push(movie);
      } else {
        this.state.toWatch.push(movie);
      }
    });
    this.setState({
      list: this.state.watched,
      watchedClicked: !this.state.watchedClicked,
      toWatchClicked: false
    });
  }
  toggleToWatch() {
    this.state.watched = [];
    this.state.list.forEach(movie => {
      if (movie.watched === 'No') {
        this.state.toWatch.push(movie);
      } else {
        this.state.watched.push(movie);
      }
    });
    this.setState({
      list: this.state.toWatch,
      toWatchClicked: !this.state.toWatchClicked,
      watchedClicked: false
    });
  }
  render() {
    var watchedStyle = {
      borderColor: this.state.watchedClicked ? '#01A9DB' : 'rgb(212, 212, 212)',
    }
    var toWatchStyle = {
      borderColor: this.state.toWatchClicked ? '#01A9DB' : 'rgb(212, 212, 212)'
    }
    return (
      <div>
        <AddMovie addMovie={this.addMovie.bind(this)} />
        <br />
        <div>
          <button style={watchedStyle} className="watchedTab" onClick={this.toggleWatched.bind(this)}>Watched</button>
          <button style={toWatchStyle} className="toWatchTab" onClick={this.toggleToWatch.bind(this)}>To Watch</button>
          <Search searchMovies={this.searchMovies.bind(this)} />
        </div>
        <div className="movieList">
          {
            this.state.list.map(movie => (
              <Movie
                movie={movie}
                key={movie.movieID}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));