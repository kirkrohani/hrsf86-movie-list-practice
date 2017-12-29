import React from 'react';

module.exports = (props) => {
  let show = props.show;
  let change = function(e) {
    props.handleCheck(props.movie);
  };
  if (show) {
    return (
      <li className="list-group-item">
        <img className="poster" src={props.movie.imdb_info.poster}/>
        <div>Year: {new Date(props.movie.release_date).getFullYear()}</div>
        <div>Runtime: {props.movie.runtime + " min"}</div>
        <div>Rated: {props.movie.imdb_info.rated}</div>
        <div>Metascore: {props.movie.imdb_info.metascore}</div>
        <div>IMDB Rating: {props.movie.imdb_info.rating}</div>
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