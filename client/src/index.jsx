import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import AddMovie from './components/AddMovie.jsx'
import ajaxGet from './ajaxGet.jsx';

// var movies = [
//   {title: 'Mean Girls', year: 1999, runtime: '105 min', metascore: 28, imbd: 4.5},
//   {title: 'Hackers', year: 2001, runtime: '5 min', metascore: 100, imbd: 1.2},
//   {title: 'The Grey', year: 2003, runtime: '98 min', metascore: 1, imbd: 2.0},
//   {title: 'Sunshine', year: 1998, runtime: '182 min', metascore: 76, imbd: 6.8},
//   {title: 'Ex Machina', year: 2089, runtime: '456 min', metascore: 99, imbd: 11.0},
// ];

// window.movies = movies;

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], 
      searchMovies: [], 
    }

    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.stateSet = this.stateSet.bind(this);
    this.fetch = this.fetch.bind(this);

    this.fetch();
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

  fetch() {
    console.log('started fetch')
    ajaxGet(this.stateSet)
  }

  stateSet(data) {
    this.setState({
      movies: data,
      searchMovies: data
    });
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

ReactDOM.render( <MovieList />, document.getElementById('app'));






