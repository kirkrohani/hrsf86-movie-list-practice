import React from 'react';

const Search = (props) => {
  var getQuery = () => {
    props.searchMovies(document.getElementById('searchBox').value);
  }
  return (
    <div>
      <input placeholder="Search..." type="text" id="searchBox" />
      <button onClick={getQuery}>Go!</button>
    </div>
  )
}
export default Search;