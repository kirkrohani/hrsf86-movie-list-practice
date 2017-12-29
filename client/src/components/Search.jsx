import React from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

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
      <div className='searchContainer'>
        <Input type='text' placeholder='Search...' value={this.state.value} onChange={this.handleChange} />
        <Button onClick={ () => this.props.handleSearch(this.state.value)} >Go!</Button>
      </div>
    );
  }

}

module.exports = Search;