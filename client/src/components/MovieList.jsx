import React from 'react';
import MovieItem from './Movie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-list">
        { this.props.movies.map(movie => {
            return <MovieItem movie={ movie } key={ movie.title }/>
          })
        }
      </div>
    )
  }
}

export default MovieList;