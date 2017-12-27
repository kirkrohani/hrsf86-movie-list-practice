import React from 'react';

const Movie = (props) => {
  return (
    <div className="movieItem">
      <p>{props.movie.title}</p>
    </div>
  );
};

export default Movie;