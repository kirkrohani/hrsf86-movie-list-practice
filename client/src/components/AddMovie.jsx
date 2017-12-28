import React from 'react';

export var AddMovie = (props) => (
  <div>
    <input
    class="add-movie"
    type="text"
    placeholder="Add Movie"
    />
    <button
    type="button"
    onClick={ () => alert('Movie was submitted')}

    >Add Movie</button>
  </div>
  )