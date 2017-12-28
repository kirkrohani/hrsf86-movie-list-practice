import React from 'react';

let inputValue = '';

const Search = (props) => (
  <div>
    <form>
      <label>
        Filter Movies:
        <input className="search" type="text" name="name" onChange={(e) => {inputValue = e.target.value}}/>
      </label>
      <input type="submit" value="Submit" onClick={(e) => {e.preventDefault(); props.filterMovies(inputValue); inputValue = '';}}/>
      <input type="submit" value="Clear Filter" onClick={e => {e.preventDefault(); props.clearFilter();}}/>
    </form>
  </div>
)

export default Search;
