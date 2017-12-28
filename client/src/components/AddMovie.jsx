import React from 'react';
import ReactDOM  from 'react-dom';

var AddMovie = () => (
  <div>
    <input type="text" placeholder="Add movie title here"></input>
    <button type="button">Add</button>
  </div>
)

module.exports.AddMovie = AddMovie;