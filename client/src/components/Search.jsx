import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSearchClick(callback) {
    callback(document.getElementById('search').value);
    document.getElementById('search').value = '';
  }

  render() {
    return (
      <div>
        <input id="search" type="text" />
        <button onClick={ this.handleSearchClick.bind(null, this.props.search) }>Go!</button>
      </div>
    );
  }

}

{/* <div>
        <input id="search" type="text" />
        <button onClick={ handleSearchClick }>Go!</button>
      </div> */}

export default Search;