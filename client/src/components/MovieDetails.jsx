import React from 'react';

const MovieDetails = (props) => {
  console.log(props);
  return (
    <div className="movieDetails">
      <p><strong>Release Date:</strong> {props.movie.release_date}<br/>
      <strong>Overview:</strong> {props.movie.overview}<br/>
      <strong>Metascore:</strong> {props.movie.popularity}<br/>
      <strong>IMDb Rating:</strong> {props.movie.vote_average}<br />
      <strong>Watched:</strong> {props.movie.watched}<br/>
      </p>
    </div>
  );
}

export default MovieDetails;