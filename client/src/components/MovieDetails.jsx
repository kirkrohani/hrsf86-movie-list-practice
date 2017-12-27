import React from 'react';

module.exports = (props) => {

  return (
    <div onClick={props.handleClick(props.movie)}>
      <div>Year: {props.year}</div>
      <div>Runtime: {props.runtime}</div>
      <div>Metascore: {props.metascore}</div>
      <div>IMDB Rating: {props.imdbrating}</div>
      <div class="form-check">
        <label class="form-check-label">
          Watched:
          <input class="form-check-input" type="checkbox" value=""/>
        </label>
      </div>
      <div>{props.thumbnail}</div>
    </div>
  );
}