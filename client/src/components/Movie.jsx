import React from 'react';
import ReactDOM  from 'react-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie">
        {this.props.title}
        <label htmlFor="watched" className="watched-label">Watched?</label>
        <input type="checkbox" className="watched" />
      </div>
    )
  }
}

export default Movie;