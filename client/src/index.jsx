import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import { movies } from './exampleMovieData.js';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: movies,
      filtered: []
    }
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
      list: this.state.filtered
    });
  }
  render() {
    return (
      <div>
        <AddMovie />
        <Search searchMovies={this.searchMovies.bind(this)} />
        {
          this.state.list.map(movie => (
            <Movie
              movie={movie}
              key={movie.title}
            />
          ))
        }
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
