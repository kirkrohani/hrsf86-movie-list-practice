import React from 'react';

class addMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addition: ''
    }
  }

  handleChange(event) {
    this.setState({
      addition: event.target.value
    });
  }

  resetFields() {
    this.setState({
      addition: ''
    });
  }

  render() {
    return (
      <form id="addMovie" onSubmit={(event) => this.props.handleAddition(this.state.addition, event, this.resetFields.bind(this))}>
        <input id="addMovieField" placeholder="Add movie..." value={this.state.addition} onChange={this.handleChange.bind(this)}></input>
        <button> Add </button>
      </form>
    );
  }
}

export default addMovie;