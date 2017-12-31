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
        <div className="watched">
          <label htmlFor={"movieID-" + this.props.id} >Watched?</label>
          <input id={"movieID-" + this.props.id} type="checkbox" />
        </div>
      </div>
    )
  }
}

export default Movie;