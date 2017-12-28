import React from 'react';

let target = ''

const AddMovie = (props) => (
  <div className="center">
    <form>
      <label>
        <input className="addMovie" placeholder="Add movie title here" type="text" name="name" onChange={e => {target = e.target.value}}/>
      </label>
      <input className="btn btn-outline-dark btn-sm" type="submit" value="Add" onClick={e => {e.preventDefault(); props.addMovieToList(target); target = '';}}/>
    </form>
  </div>
)

export default AddMovie;
