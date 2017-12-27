import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="wrap">
           <div className="search">
              <input type="text" className="searchTerm" placeholder="Search for a movie..."></input>
              <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
              </button>
           </div>
        </div>
      </div>
    )
  }
}

export default Search;
