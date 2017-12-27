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
    axios.get('/movies')
      .then(response => {
        this.setState({
          list: response.data
        });
      })
      .catch(function(error) {
        console.log(error)
      });
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
  addMovie(movieTitle) {
    axios.post('/movie')
        .then(response => {
          if (movieTitle) {
            this.setState({
              list: this.state.list.concat([
                {
                  title: movieTitle
                }
              ])
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
  }
  toggleWatched() {
    this.state.toWatch = [];
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
                key={movie.title ? movie.title : 'New Title'}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
