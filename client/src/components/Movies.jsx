import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './Movie.jsx';
import MovieDetails from './MovieDetails.jsx'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props.list);
    return (
      <ul>
        {this.props.list.map((movie) => <Movie key={movie.id} title={movie.original_title} />)}
      </ul>
    )
  }
}

export default Movies;