import React from 'react';
import MovieDetails from './MovieDetails.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
  }

  toggleDisplay() {
    this.setState((prevState) => {
      return {
        display: !prevState.display
      }
    });
  }

  render() {
    return (
      <div className={this.state.display ? 'MovieListItem expanded' : 'MovieListItem'}>
        <h4 onClick={this.toggleDisplay.bind(this)} >{this.props.title}</h4>
        {this.state.display && 
          <MovieDetails
            toggleWatched = {this.props.toggleWatched} 
            watched = {this.props.watched}
            year={this.props.year} 
            rating={this.props.rating} 
            overview={this.props.overview}
            thumbnail={this.props.thumbnail}
          />
        }
      </div>
    )
  }
}

module.exports = Movie;
