import React from 'react';
import ReactDOM  from 'react-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {this.props.title}
      </div>
    )
  }
}

export default Movie;