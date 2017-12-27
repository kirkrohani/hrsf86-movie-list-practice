import React from 'react';

const MovieDetails = (props) => {
  return (
    <div className="movieDetails">
      <p><strong>Year:</strong> {props.movie.Year}<br/>
      <strong>Runtime:</strong> {props.movie.Runtime}<br/>
      <strong>Metascore:</strong> {props.movie.Metascore}<br/>
      <strong>imdbRating:</strong> {props.movie.imdbRating}<br />
      <strong>Watched:</strong> {props.movie.watched}<br/></p>
    </div>
  );
}

export default MovieDetails;