import React from 'react';

module.exports = (props) => {
  let show = props.show;
  let change = function(e) {
    console.log(e);
    props.handleCheck(props.movie);
  };
  if (show) {
    return (
      <li className="list-group-item">
        <div>Year: {props.year}</div>
        <div>Runtime: {props.runtime}</div>
        <div>Metascore: {props.metascore}</div>
        <div>IMDB Rating: {props.imdbrating}</div>
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