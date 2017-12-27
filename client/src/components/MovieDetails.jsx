import React from 'react';

function MovieDetails(props) {
  return (
    <tr className={props.displayDetails ? "movieDetails" : "movieDetails hidden"}>
      <td colSpan="2">
        <span> Year: {props.movieDetails.year} </span>
        <span> Runtime: {props.movieDetails.runtime} </span>
        <span> RT Score: {props.movieDetails['RT Score']} </span>
        <span> Box Office: {props.movieDetails['box office']} </span>
      </td>  
    </tr>
  );
}

export default MovieDetails;