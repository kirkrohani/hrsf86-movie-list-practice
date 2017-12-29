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
    return (
      <ul>
        {this.props.list.map((movie) => <Movie title={movie.title} />)}
      </ul>
    )
  }
}

export default Movies;

// this.props.list.map((list) => <Movie title={this.props.list.title} />)