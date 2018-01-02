import React from 'react';

let Movie = (props) => {
  let handleClick = (e) => {
    console.error('Error querying IMDB: To reduce API requests, all movies are now Jurassic Park. Rawr!');
    props.handler(props.movie);
  }
  if (props.show) {
    return (
      <li 
        className="list-group-item"
        movie={props.movie}
        onClick={handleClick}
      >
        <div>
          {props.movie.title} 
          {props.movie.watched ? <span className="badge badge-success">Watched</span> : null}
        </div>
      </li>
    );
  }
  else {
    return null;
  }
}

module.exports = Movie;