import React from 'react';

class Movie extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className = 'movieEntry' > {this.props.movie.title} </div>
  	)
  }
}

export default Movie;