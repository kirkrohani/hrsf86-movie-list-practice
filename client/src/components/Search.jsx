import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleKeyPressFilter = this.handleKeyPressFilter.bind(this);
  }

  handleChangeFilter (e) {
    var movieArray = [];
    if (this.state.input === '') {
      this.props.filterMovies(this.props.movies);
    } else {
      var searchTerm = this.state.input;
      for (var i = 0; i < this.props.movies.length; i++) {
        var curMovie = this.props.movies[i];
        var curMovieTitle = this.props.movies[i].title.toLowerCase();
        if (curMovieTitle.indexOf(searchTerm) >= 0) {
          movieArray.push(curMovie);
        }
      }
      this.props.filterMovies(movieArray);
    }
  }


  handleKeyPressFilter (e) {
    this.setState({input: e.currentTarget.value.toLowerCase()})
    if (e.key === 'Enter') {
      this.handleChangeFilter(e);
    }
  }

  render() {
    return (
      <div>
        <div>
           <div>
              <input 
                placeholder="Search for a movie..."
                onKeyUp={this.handleKeyPressFilter}
                >
              </input>
              <button
              onClick={this.handleChangeFilter}> GO </button>
           </div>
        </div>
      </div>
    )
  }
}

export default Search;
