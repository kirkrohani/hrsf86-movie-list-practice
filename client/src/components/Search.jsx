import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  resetFields() {
    this.setState({
      query: ''
    });
  }

  render() {
    return (
      <form id="search" onSubmit={(event) => this.props.handleSearch(this.state.query, event, this.resetFields.bind(this))}>
        <input id="searchField" placeholder="Search..." value={this.state.query} onChange={this.handleChange.bind(this)}></input> 
        <button> Go! </button>
      </form>  
    );
  }
}

export default Search;