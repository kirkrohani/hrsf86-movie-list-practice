import React from 'react';

class Movie extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <button onClick={ () => this.props.toggleWatched(this.props.title) } >Watched</button>
      </div>); 
  }
}

module.exports = Movie;