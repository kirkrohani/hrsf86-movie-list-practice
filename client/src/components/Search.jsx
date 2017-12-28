import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter (e) {
    var movieArray = [];

    if (e.key === 'Enter') {
      var searchTerm = e.currentTarget.value.toLowerCase();
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

  render() {
    return (
      <div>
        <div>
           <div>
              <input 
                placeholder="Search for a movie..."
                onKeyPress={this.handleFilter}
                >
              </input>
              <button> GO </button>
           </div>
        </div>
      </div>
    )
  }
}

export default Search;
