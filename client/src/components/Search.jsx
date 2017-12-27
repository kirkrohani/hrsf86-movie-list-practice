import React from 'react';

const Search = (props) => {
  var getQuery = () => {
    props.searchMovies(document.getElementById('searchBox').value);
  }
  return (
    <div className="searchBar">
      <input placeholder="Search..." type="text" id="searchBox" />
      <button onClick={getQuery}>Go!</button>
    </div>
  )
}
export default Search;