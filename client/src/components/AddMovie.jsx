import React from 'react';

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
        <input type='text' onChange={this.handleChange.bind(this)} />
        <button onClick={ () => this.props.addNewMovie(this.state.value) } >Add Movie</button>
      </div>
    ); 
  }

}

module.exports = AddMovie;