import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    };
  }
  onWatchClick() {
    this.setState({
      watched: true
    });
  }
  render() {
    var style = {
      backgroundColor: this.state.watched ? '#01A9DB' : 'white',
      color: this.state.watched ? 'white' : 'black'
    };
    return (
      <div className="movieItem">
        <p className="movieTitle">{this.props.movie.title}</p>
        <button style={style} className="watchButton" onClick={this.onWatchClick.bind(this)}>Watched</button>
      </div>
    );
  }
};

export default Movie;