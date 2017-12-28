import React from 'react';

let Movie = (props) => {
  let handleClick = (mov) => {
    props.handler(props.movie);
  }
  if (props.show) {
    return (
      <li 
      className="list-group-item"
      movie={props.movie}
      onClick={handleClick}
      >
        <div>{props.movie.title}</div>
      </li>
    );
  }
  else {
    return null;
  }
}

module.exports = Movie;