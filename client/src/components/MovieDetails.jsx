import React from 'react';

function MovieDetails(props) {
  return (
    <tr className={props.displayDetails ? "movieDetails" : "movieDetails hidden"}>
      <td colSpan="2">
        <span> <strong>Release Date:</strong> {props.movieDetails.release_date} </span>
        <span> <strong>Average Score:</strong> {props.movieDetails.vote_average} </span>
        <span> <strong>Overview:</strong> {props.movieDetails.overview} </span>
      </td>  
    </tr>
  );
}

export default MovieDetails;