import React from 'react';

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
        <div 
          className={this.state.display ? 'movieDetails show' : 'movieDetails hide'}>
          <ul>
            <li>Year: {this.props.year}</li>
            <li>Rating: {this.props.rating}</li>
            <li>Overview: {this.props.overview}</li>
            <img src={this.props.thumbnail} />
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = Movie;
