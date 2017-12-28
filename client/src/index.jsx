import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

// //// HARD CODE DATA ////
// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
//   {title: 'This Means War'}
// ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios.get('/movies')
      .then(response => {
        this.setState({ movies: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  addMovie(addInput) {
    var newList = this.state.movies;

    var movie = {
      title: addInput
    }

    axios.post('/movies', movie)
      .then(response => {
        this.componentDidMount();
      })
      .catch(error => {
        console.error(error);
      });

    this.setState({ movies: newList });
  }

  searchList(searchInput) {
    var filteredMovies = [];

    for (var i = 0; i < this.state.movies.length; i++) {
      for (var key in this.state.movies[i]) {
        var isMatch = false;
        if (this.state.movies[i][key].toLowerCase().includes(searchInput.toLowerCase())) {
          filteredMovies.push(this.state.movies[i]);
          isMatch = true;
        }
        if (isMatch) {
          break;
        }
      }
    }
    //// @TODO ////
    // implement searches that do not get any results
    this.setState({movies: filteredMovies});
  }

  render() {
    return (
      <div>
        <div className="add-movie">
          <AddMovie addMovie={ this.addMovie.bind(this) }/>
        </div>
        <div className="search-bar">
          <Search search={ this.searchList.bind(this) }/>
        </div>
        <div className="movie-list">
          <MovieList movies={ this.state.movies }/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
