import React from 'react';
import ReactDOM from 'react-dom';

const Search = (props) => {
    return (
        <div className="searchBar"> 
          <form>
            <input type="text" placeholder="search" /><input type="submit" value="Go" />
          </form>
        </div>
    );
};

export default Search;