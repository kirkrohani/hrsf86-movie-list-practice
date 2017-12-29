import React from 'react';
import ReactDOM  from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <input type="text" placeholder="Add new movie" />
      <button type="submit">Add</button>
      </div>
    )
  }
}

export default AddMovie;