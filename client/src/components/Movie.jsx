import React from 'react';
import MovieDetails from './MovieDetails.jsx';


export default class Movie extends React.Component {


  constructor(props) {
    super(props);
  }; 

  toggleMovieDetails() {
    //make the movie details div appear or disappear on click
    //maybe make it highlight

  }; 

  render() {
    return (
      <div>
        <div className="movie-box">
          <div className="movie-title" /*onClick = {toggleMovieDetails}*/>{this.props.movie.title}</div>
        </div>
        <div className="details-box">
          <MovieDetails description = {this.props.movie.description}/>
        </div>
      </div>
    );
  }
};
