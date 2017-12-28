import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/search.jsx';
import MovieDetails from './components/MovieDetails.jsx';
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
	  ];
    }
  }

  render() {
    return (
      <Search handleClick={this.handleClick} />
      <Movie movie={this.state.movies.map((movie) => {
      	return {this.props.movie.title};
      })} />
      <MovieDetails details={this.state.movies.map((movie) => {
      	return {this.props.movie.details};
      })} />
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
