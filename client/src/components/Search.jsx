import React from 'react';
import ReactDOM from 'react-dom';

const Search = ({submitSearch}) => {
    return (
        <div className="search-bar"> 
          <form>
            <input type="text" placeholder="Search List" onChange = {submitSearch} />
          </form>
        </div>
    );
};

export default Search;