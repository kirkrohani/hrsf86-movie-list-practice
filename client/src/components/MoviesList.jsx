import React from 'react';
import Movie from './Movie.jsx';

var MoviesList = (props) => (
  <div className="row movie-list">
    {props.list.map((item) => (
      <Movie key={item.id} movie={item} setWatched={props.setWatched}/>))}
  </div>
);

module.exports = MoviesList;