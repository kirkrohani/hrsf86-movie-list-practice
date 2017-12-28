import React from 'react';
import ClassNames from 'classnames';
import MovieDetails from './MovieDetails.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      towatch: true
    };
  }

  toggleWatched () {
    if (!this.state.watched){
      this.setState ({
        watched: true,
        towatch: false
      })
    } else {
      this.setState ({
        watched: false,
        towatch: true
      })
    }
  }

  renderButton () {
    if (this.state.watched) {
      return (
        <button type="button" onClick={() => this.toggleWatched()}>Watched</button>
      );
    } else {
      return (
        <button type="button" onClick={() => this.toggleWatched()}>To watch</button>
      )
    }
  }

  // showDetails () {
  //   console.log('show');
  //   return <MovieDetails movie={this.props.movie}/>
  // }

  render () {
    let classes = ClassNames('movie', {watched: this.state.watched}, {towatch: this.state.towatch});
    return (
      <div className={classes}>
        <li onClick={() => (<MovieDetails movie={this.props.movie}/>)}>{this.props.movie.title}</li>
        {this.renderButton()}
      </div>
    )
  }
}



export default Movie;
