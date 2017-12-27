import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovie: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Add movie title here" id="addBox" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;