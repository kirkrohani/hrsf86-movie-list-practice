import React from 'react';

let target = ''

const AddMovie = (props) => (
  <div>
    <form>
      <label>
        Add Movie:
        <input className="addMovie" type="text" name="name" onChange={e => {target = e.target.value}}/>
      </label>
      <input type="submit" value="Submit" onClick={e => {e.preventDefault(); props.addMovieToList(target); target = '';}}/>
    </form>
  </div>
)

export default AddMovie;
