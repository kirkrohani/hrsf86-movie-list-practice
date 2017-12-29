import React from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class AddMovie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Input type='text' onChange={this.handleChange.bind(this)} />
        <Button onClick={ () => this.props.addNewMovie(this.state.value) } >Add Movie</Button>
      </div>
    ); 
  }

}

module.exports = AddMovie;