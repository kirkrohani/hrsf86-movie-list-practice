import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: null
    };
    this.movie = {
      title: this.state.movieTitle
    };
  }

  addMovieOnClick (e) {
    e.preventDefault(); 
    this.movie.title = this.state.movieTitle; 
    var movieStr = JSON.stringify(this.movie);
    this.props.addMovieToList(movieStr);
  }

  render () {
    return (
      <div className="center">
        <form>
          <label>
            <input className="addMovie" placeholder="Add movie title here" type="text" name="name" onChange={e => {console.log(e.target.value); this.setState({movieTitle: e.target.value})}}/>
          </label>
          <input className="btn btn-outline-dark btn-sm" type="submit" value="Add" onClick={(e) => this.addMovieOnClick(e)}/>
        </form>
      </div>
    )
  }
}

export default AddMovie;
