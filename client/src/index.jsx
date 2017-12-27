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
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
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
      title: movieTitle
    }
    this.setState({
      movies: this.state.movies.concat( newMovie )
    });
    callback();
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch.bind(this)} />
        <AddMovie handleAddition={this.handleAddition.bind(this)} />
        <table>
          <tr>
            <th> To Watch </th>
            <th> Completed </th>
          </tr>
          {
            this.state.movies.map( (movie) => <Movie movie={movie} /> )
          }
        </table>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
