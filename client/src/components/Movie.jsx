import React from 'react';
import ReactDOM  from 'react-dom';

var MovieDetailsComponent = require('./MovieDetails.jsx');

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    }
  }

  handleWatchToggle(){
    this.props.movie.watched = !this.props.movie.watched
    this.setState({});
  }

  handleTitleClick(){
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  render() {
    return (
      <tbody>
        <tr id="button-column">
          <td id="movie-title" onClick={this.handleTitleClick.bind(this)}>{this.props.movie.title}</td>
          {
            this.props.movie.watched 
              ? <td><button type="button" class="watched" onClick={this.handleWatchToggle.bind(this)}>watched!</button></td> 
              : <td><button type="button" class="not-watched" onClick={this.handleWatchToggle.bind(this)}>watched?</button></td>    
          }
          
        </tr>
        <tr>
          {
            this.state.showDescription
              ? <MovieDetailsComponent.MovieDetails movie={this.props.movie}/>
              : null
          }
        </tr>
      </tbody>
    );
  }
}


module.exports.Movie = Movie;