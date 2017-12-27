import React from 'react';
import ReactDOM  from 'react-dom';
import MovieItem from './components/Movie.jsx'

//// HARD CODE DATA ////
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
    this.state = {
      movies: movies
    };
  }

  render() {
    return (
      <div>
        { this.state.movies.map(movie => {
            return <MovieItem movie={ movie } key={ movie.title }/>
          })
        }
      </div>
    )
  }
}

ReactDOM.render(<MovieList />, document.getElementById('app'));
