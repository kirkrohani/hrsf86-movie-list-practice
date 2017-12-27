import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovie: ''
    }
  }
  updateList() {
    this.setState({
      newMovie: document.getElementById('addBox').value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addMovie(this.state.newMovie);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder="Add movie title here" id="addBox" />
          <button className="addButton" onClick={this.updateList.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;