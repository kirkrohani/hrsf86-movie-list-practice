import React from 'react';
import ReactDOM  from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    this.setState({movieName: event.target.value})
  }

  addMovie(event) {
    this.props.add(this.state.movieName);
    this.setState({movieName: ''});
  }

  render() {
    return (
      <div className="add-movie">
        <input type="text" value={this.state.movieName} onChange={this.handleChange} placeholder="Add new movie" />
        <button type="submit" onClick={this.addMovie} >Add</button>
      </div>
    )
  }
}

export default AddMovie;