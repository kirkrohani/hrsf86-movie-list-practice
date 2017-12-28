import React from 'react';

export const Search = ({submitSearch}) => {
    return (
        <div className="search-bar"> 
          <form>
            <input className="inputbar" type="text" placeholder="Search List" onChange = {submitSearch} />
          </form>
        </div>
    );
};