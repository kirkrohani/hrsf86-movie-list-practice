import React from 'react';

export class AddMovie extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      value: ''
    };

  }
  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }



  render () {
    return (
      <div>
          <input
          class="add-movie"
          type="text"
          placeholder="Add Movie"
          onChange={ this.handleInputChange.bind(this)}
          />
          <button
          type="button"
          onClick={ () => this.props.addMovie(this.state.value)}

          >Add Movie</button>
        </div>
      )
  }

}
