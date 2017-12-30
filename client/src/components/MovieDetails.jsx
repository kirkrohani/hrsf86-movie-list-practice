import React from 'react';

module.exports = (props) => {
  let show = props.show;
  let change = function(e) {
    props.handleCheck(props.movie);
  };
  if (show) {
    return (
      <li className="list-group-item">
        <img className="poster" src={props.movie.poster_url}/>
        <div>Year: {props.movie.year}</div>
        <div>Runtime: {props.movie.runtime + " min"}</div>
        <div>Rated: {props.movie.rated}</div>
        <div>Metascore: {props.movie.metascore}</div>
        <div>IMDB Rating: {props.movie.imdb_rating}</div>
        <div className="checkbox checkbox-inline">
          Watched:
          <input 
          className="" 
          type="checkbox" 
          checked={props.movie.watched}
          onChange={change}
          />
        </div>
      </li>
    );
  }
  else {
    return null;
  }
}