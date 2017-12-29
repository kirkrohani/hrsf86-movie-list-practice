import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd(callback) {
    var addInput = document.getElementById('add-movie');
  
    callback(addInput.value);
    
    addInput.value = '';
  }

  render() {
    return (
      <div>
        <input id="add-movie" type="text" />
        <button onClick={ this.handleAdd.bind(null, this.props.addMovie) }>Add</button>
      </div>
    );
  }
}

export default AddMovie;