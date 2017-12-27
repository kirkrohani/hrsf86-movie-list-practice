import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>Search for a movie here
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={ () => this.props.handleSearch(this.state.value)} >Go!</button>
      </div>
    );
  }

}

module.exports = Search;