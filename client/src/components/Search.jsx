import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
           <div>
              <input type="text" placeholder="Search for a movie..."></input>
              <button type="submit" className="searchButton">
              <i></i> GO </button>
           </div>
        </div>
      </div>
    )
  }
}

export default Search;
