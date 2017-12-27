import React from 'react';

function Movie(props) {
  return <tr><td colspan="2"> {props.movie.title} </td></tr>
}

export default Movie;