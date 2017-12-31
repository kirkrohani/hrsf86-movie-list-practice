import React from 'react';
import ReactDOM  from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.callSearch = this.callSearch.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value})
  }

  callSearch() {
    this.props.search(this.state.searchText);
    this.setState({searchText: ''});
  }

  render() {
    return (
      <div className="search-movie">
        <input type="text" value={this.state.searchText} onChange={this.handleChange} placeholder="Search for a movie..." />
        <button type="submit" onClick={this.callSearch} >Search</button>
      </div>
    )
  }
}

export default Search;  