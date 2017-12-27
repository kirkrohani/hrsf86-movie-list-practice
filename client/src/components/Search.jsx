import React from 'react';

export const Search = ({submitSearch}) => {
    return (
        <div className="search-bar"> 
          <form>
            <input type="text" placeholder="Search List" onChange = {submitSearch} />
          </form>
        </div>
    );
};