import React from 'react';
import MovieDetails from './MovieDetails.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      show: false
    };
  }
  onWatchClick() {
    this.setState({
      watched: !this.state.watched
    });
    this.props.movie.watched = (this.props.movie.watched === 'Yes') ? 'No' : 'Yes';
  }
  showDetails() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    var style = {
      backgroundColor: this.state.watched ? '#01A9DB' : 'white',
      color: this.state.watched ? 'white' : 'black'
    };
    return (
      <div>
        <div className="movieItem">
          <p className="movieTitle" onClick={this.showDetails.bind(this)}>{this.props.movie.title}</p>
          <button style={style} className="watchButton" onClick={this.onWatchClick.bind(this)}>Watched</button>
        </div>
        <div>
          { this.state.show ? <MovieDetails movie={this.props.movie} /> : null }
        </div>
      </div>
    );
  }
};

export default Movie;