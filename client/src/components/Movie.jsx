import React from 'react';
import ReactDOM  from 'react-dom';

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: false,
      watched: false
    }
  }

  render() {
    return (
      <tr>
        <td id="movie-title">{this.props.movie.title}</td>
      </tr>
    );
  }
}


module.exports.Movie = Movie;