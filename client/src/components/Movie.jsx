import React from 'react';
import MovieDetails from './MovieDetails.jsx';

// function Movie(props) {
//   return (
//     <tbody>
//       <tr>
//         <td className="movieTitle" onClick={props.handleShowMovieDetails}> {props.movie.title}</td>
//         <td className="toggleCompletion" onClick={() => props.handleToggleWatched(props.movie.id)}> {props.movie.watched ? 'add to watch' : 'add to completed'} </td>
//       </tr>
//       <MovieDetails movieDetails={props.movie.details}/>
//     </tbody>  
//   );  
// }

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDetails: false
    };
  }

  toggleDetails() {
    this.setState({
      displayDetails: !this.state.displayDetails
    });
  }

  render() {
    return (
      <tbody>
        <tr className={this.state.displayDetails ? 'selectedMovieDetails' : ''}>
          <td className="movieTitle" onClick={this.toggleDetails.bind(this)}> {this.props.movie.title}</td>
          <td className="toggleCompletion" onClick={() => this.props.handleToggleWatched(this.props.movie.id)}> {this.props.movie.watched ? 'add to watch' : 'add to completed'} </td>
        </tr>
        <MovieDetails movieDetails={this.props.movie.details} displayDetails={this.state.displayDetails}/>
      </tbody>  
    );  
  }
}

export default Movie;