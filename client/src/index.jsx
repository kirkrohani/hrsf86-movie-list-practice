import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import AddMovie from './components/AddMovie.jsx'

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

window.movies = movies;

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies, 
      searchMovies: movies, 
    }

    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  filterMovies (movieArray) {
    this.setState({
      searchMovies: movieArray
    })
  }

  addNewMovie(movieName) {
    var movieObj = {
      title: movieName
    }
    for (var i = 0; i < this.state.movies.length; i++) {
      var curMovieTitle = this.state.movies[i].title;
      if (curMovieTitle !== movieObj.title) {
        continue;
      } else {
        break;
      }
    }

    this.state.movies.push(movieObj);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <div style={{marginBottom:10}}> Add a Movie! 
          <AddMovie addNewMovie={this.addNewMovie}/>
        </div>
        <div style={{marginBottom: 20}}> Search for a Movie! 
          <Search 
            searchMovies={this.state.searchMovies}
            filterMovies={this.filterMovies}
            movies={this.state.movies}
          />
        </div>
        
        <div> Current Movie List! </div>
        <table>
          <tbody>
            {this.state.searchMovies.map((movie) => <Movie movie={movie} key={movie.title}/> )}
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={window.movies} />, document.getElementById('app'));






