import React from 'react';

let Movie = (props) => {
  console.log(props);
  let handleClick = (mov) => {
    console.log(mov);
    props.toggleDetails(props.movie);
  }
  if (props.show) {
    return (
      <li 
      className="list-group-item"
      movie={props.movie}
      onClick={handleClick}
      >
        <div>{props.movie.title}</div>
        {/* <MovieDetails movie={props.movie} clickHandler="handleClick"/> */}
      </li>
    );
  }
  else {
    return null;
  }
}

module.exports = Movie;