import React from 'react';
import ReactDOM from 'react-dom';

const Search = ({submitSearch}) => {
    return (
        <div className="searchBar"> 
          <form>
            <input type="text" placeholder="search" onChange = {submitSearch} />
          </form>
        </div>
    );
};

export default Search;