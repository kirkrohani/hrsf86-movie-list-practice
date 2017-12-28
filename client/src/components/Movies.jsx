import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './Movie.jsx';
import MovieDetails from './MovieDetails.jsx'

class Movies extends React.Component {
  constructor() {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        Movies
        <Movie />
      </div>
    )
  }
}

export default Movies;