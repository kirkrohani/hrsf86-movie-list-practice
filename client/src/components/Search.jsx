import React from 'react';
import ReactDOM  from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search for a movie..." />
        <button type="submit">Search</button>
      </div>
    )
  }
}

export default Search