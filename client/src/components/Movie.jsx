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
      <div>
        <span onClick={this.toggleDisplay.bind(this)} >{this.props.title}</span>
        <button 
          className={this.props.watched ? 'watchButton watched' : 'watchButton'} 
          onClick={ () => this.props.toggleWatched(this.props.title) } >
          Watched
        </button>
        {this.state.display && 
          <MovieDetails
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
