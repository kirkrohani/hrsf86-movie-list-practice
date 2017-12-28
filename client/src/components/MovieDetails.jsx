import React from 'react';

module.exports = (props) => {
  let show = props.show;
  if (show) {
    return (
      <li className="list-group-item">
        <div>Year: {props.year}</div>
        <div>Runtime: {props.runtime}</div>
        <div>Metascore: {props.metascore}</div>
        <div>IMDB Rating: {props.imdbrating}</div>
        <div className="form-check">
          <label className="form-check-label">
            Watched:
            <input className="form-check-input" type="checkbox" value=""/>
          </label>
        </div>
        <div>{props.thumbnail}</div>
      </li>
    );
  }
  else {
    return null;
  }
}