import React from 'react';
import {MovieDetails} from './MovieDetails.jsx'

export class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: this.props.display, 
      displayDetails: 'false'
    }
  };

  showDetails () {
    if (this.state.displayDetails === 'false') {
      this.setState({
        displayDetails: 'true'
      })
    } else {
      this.setState({
        displayDetails: 'false'
      })
    }
  }



  render() {
    return (
      <div class={this.props.display}>
        <div id="movie" onClick={() => this.showDetails()}>
          {this.props.movie.title}

        </div>
        <button
          type="button"
          id={this.props.movie.title.split(' ').join('')}
          onClick={(e) => this.props.addToWatchList(`#${e.target.id}`, this.props.movie) }
          >Unwatched
        </button>        
        <div>
          <MovieDetails 
          movie={this.props.movie}
          displayClass={this.state.displayDetails}
        />         
        </div>
      </div>
      )
  }

}



