import React from 'react';
import ClassNames from 'classnames';
import MovieDetails from './MovieDetails.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      towatch: true,
      showDetails: false,
    };
  }

  toggleWatched() {
    if (!this.state.watched) {
      this.setState({
        watched: true,
        towatch: false,
      });
    } else {
      this.setState({
        watched: false,
        towatch: true,
      });
    }
  }

  renderButton() {
    if (this.state.watched) {
      return (
        <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => this.toggleWatched()}>Watched</button>
      );
    }
    return (
      <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => this.toggleWatched()}>To watch</button>
    )
  }

  showDetails(prevState) {
    this.setState({
      showDetails: !prevState,
    });

  }
  renderDetails() {
    if (this.state.showDetails) {
      return <MovieDetails movie={this.props.movie}/>
    }
  }
  
  render() { 
    let classes = ClassNames('movie', {watched: this.state.watched}, {towatch: this.state.towatch});
    return (
      <div className={classes}>
        <div className="row justify-content-md-center">
          <div className="col col-sm-">
            <li  onClick={() => this.showDetails(this.state.showDetails)}>{this.props.movie.title}</li>
           {this.renderDetails()}
          </div>
          <div className="col col-sm-auto">
            {this.renderButton()}
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;
