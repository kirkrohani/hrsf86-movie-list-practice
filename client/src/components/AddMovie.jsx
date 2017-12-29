import React from 'react';

export default class AddMovie extends React.Component {

  handleInput(event) {
    this.props.addMovie(event.target.value);
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleInput.bind(this)}/>
          <input type="submit" value="Add Movie"/>
        </form>
      </div>
    )
  };
};
