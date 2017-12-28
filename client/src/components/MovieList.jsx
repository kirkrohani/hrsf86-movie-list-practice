import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {
  if (props.movies.length !== 0) {
    return (
      <div>
      <ul>
      {props.movies.map((movie, idx) =>
        <Movie key={idx} movie={movie}/>
      )}
      </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3>No movies matched your query</h3>
      </div>
    )
  }
}


export default MovieList;
