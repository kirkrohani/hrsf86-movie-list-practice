import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';

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
  }

  render() {
    return (
      <div>
        <div> Search for a Movie! 
          <Search />
        </div>
        
        <div> The actual list will go here </div>
          {this.props.movies.map((movie) => <Movie movie={movie} key={movie.title}/> )}
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={window.movies} />, document.getElementById('app'));






