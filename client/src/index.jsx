import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import _ from 'underscore';

const movies = [
  {id: 1, title: 'Mean Girls'},
  {id: 2, title: 'Hackers'},
  {id: 3, title: 'The Grey'},
  {id: 4, title: 'Sunshine'},
  {id: 5, title: 'Ex Machina'},
]

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: this.props.movies,
      displayedMovies: this.props.movies,
      filteredBy: null
    }
  }

  addNewMovie(title) {
    // update movie if it's a new unique title
    let existsInList = _.some(this.state.allMovies, (movie) => {
      return movie.title === title;
    })

    /// clear filter and display all movies
    if (!existsInList) {
      var newMovie = {title: title};
      var copyOfMovies = this.state.allMovies.concat(newMovie);
      this.setState({
        allMovies: copyOfMovies,
        displayedMovies: copyOfMovies
      });
    }
  }

  updateMoviesList(query) {
    var queryMovies = _.filter(this.state.allMovies, (movie) => {
      return (movie.title.toUpperCase().includes(query.toUpperCase()));
    });

    this.setState({
      displayedMovies: queryMovies
      //filtered: queryMovies.length < this.state.allMovies.length ? true : false
    })
  }

  toggleWatched(key) {
    console.log(key);
  }

  render() {
    let movies = this.state.displayedMovies.map((movie) => {
      return <Movie key={movie.id} title={movie.title} toggleWatched={this.toggleWatched.bind(this)}/>
    })

    return (
      <div>
        <Search handleSearch={ (query) => this.updateMoviesList.call(this, query) } />
        <AddMovie addNewMovie={ (title) => this.addNewMovie.call(this, title) } />
        <h2>Movie List</h2>
        {this.state.displayedMovies.length > 0 ? movies : 'No results for that search!'}
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={movies} />, document.getElementById('app'));
