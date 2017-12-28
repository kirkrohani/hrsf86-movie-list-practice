import React from 'react';
import ReactDOM  from 'react-dom';

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: false,
      watched: false
    }
  }

  handleWatchToggle(){
    this.setState({
      showDescription: this.state.showDescription,
      watched: !this.state.watched
    })
  }

  render() {
    return (
      <tr>
        <td id="movie-title">{this.props.movie.title}</td>
        {
          this.state.watched 
            ? <td><button class="watched" onClick={this.handleWatchToggle.bind(this)}>watched!</button></td> 
            : <td><button class="not-watched" onClick={this.handleWatchToggle.bind(this)}>watched</button></td>    
        }
      </tr>
    );
  }
}


module.exports.Movie = Movie;