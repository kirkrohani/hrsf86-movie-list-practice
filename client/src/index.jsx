import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import AddMovie from './components/AddMovie.jsx'
import ajaxGetMovies from './ajaxGetMovies.jsx';
import ajaxGetLoad from './ajaxGetLoad.jsx';
import ajaxPost from './ajaxPost.jsx';



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
    console.log('starting add and post')
    var movieObj = {
      title: movieName
    }
    ajaxPost(movieName);
    this.fetch()
  }

  fetch() {
    ajaxGetMovies(this.stateSet)
    ajaxGetLoad(console.log)
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






