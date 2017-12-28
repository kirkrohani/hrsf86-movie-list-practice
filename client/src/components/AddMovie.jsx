import React from 'react';
class AddMovie extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movieName: ''
    }

    this.addMovie = this.addMovie.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ movieName: e.target.value})
    if (e.key === 'Enter' && this.state.movieName !== '') {
      this.addMovie();
    }
  }

  addMovie () {
    this.props.addNewMovie(this.state.movieName);
  }

  render() {
    return (
        <div>
          <label> Movie Name
            <input 
              type="text" 
              onKeyUp={this.handleChange}
              id="movieName" 
              placeholder="ex. Zootopia" 
              />
          </label>
          <button>Add Movie</button>
        </div>
      )
  }
}

export default AddMovie;