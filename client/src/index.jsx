import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {id: 0, title: 'Mean Girls', watched: false, details: {year: '2004', runtime: '97 minutes', 'RT Score': '84%', 'box office': '$129 million'}},
        {id: 1, title: 'Hackers', watched: false, details: {year: '1995', runtime: '107 minutes', 'RT Score': '32%', 'box office': '$7.5 million'}},
        {id: 2, title: 'The Grey', watched: false, details: {year: '2012', runtime: '117 minutes', 'RT Score': '78%', 'box office': '$77.3 million'}},
        {id: 3, title: 'Sunshine', watched: false, details: {year: '2007', runtime: '107 minutes', 'RT Score': '75%', 'box office': '$32 million'}},
        {id: 4, title: 'Ex Machina', watched: false, details: {year: '2015', runtime: '108 minutes', 'RT Score': '93%', 'box office': '$36.9 million'}},
      ],
      nextMovieId: 5,
      view: false
    }
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
      id: this.state.nextMovieId,
      title: movieTitle,
      watched: false,
      details: {year: 'not available', runtime: 'not available', 'RT Score': 'not available', 'box office': 'not available'}
    }
    this.setState({
      movies: this.state.movies.concat( newMovie ),
      nextMovieId: this.nextMovieId + 1
    });
    callback();
  }

  toggleWatched(movieId) {
    var updatedMovies = JSON.parse(JSON.stringify(this.state.movies));
    updatedMovies[movieId].watched = !updatedMovies[movieId].watched;
    this.setState({
      movies: updatedMovies,
      nextMovieId: this.nextMovieId
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
            this.state.view === movie.watched ? <Movie movie={movie} handleToggleWatched={this.toggleWatched.bind(this)} /> : null
          )}
        </table>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
