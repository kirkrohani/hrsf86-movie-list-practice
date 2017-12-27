import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Search />
      {
        movies.map((movie, i) => 
          < Movie title={movie.title} key={i}/>
        )
      }
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
