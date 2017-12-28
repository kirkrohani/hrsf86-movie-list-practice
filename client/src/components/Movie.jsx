import React from 'react';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div>
        <span>{ this.props.movie.title }</span>
        <span>Watched</span>
      </div>
    );
  }
}

export default MovieItem;