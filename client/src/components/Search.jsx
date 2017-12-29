import React from 'react';

let inputValue = '';

const Search = (props) => (
  <div className="center">
    <form>
      <label>
        <input className="search" placeholder="Search..." type="text" name="name" onChange={(e) => {inputValue = e.target.value}}/>
      </label>
      <input className="btn btn-outline-dark btn-sm" type="submit" value="Go" onClick={(e) => {e.preventDefault(); props.filterMovies(inputValue); inputValue = '';}}/>
      <input className="btn btn-outline-dark btn-sm" type="submit" value="Clear Search" onClick={e => {e.preventDefault(); props.clearFilter();}}/>
    </form>
  </div>
)

export default Search;
