import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx'
import AddMovie from './components/AddMovie.jsx'
import Search from './components/Search.jsx'

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

class MovieList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AddMovie />
        <Search />
        <div className="movieList">
          {movies.map((movie) => <Movie movie={movie}/>)}
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
