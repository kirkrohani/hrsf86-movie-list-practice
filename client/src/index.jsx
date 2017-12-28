import React from 'react';
import ReactDOM  from 'react-dom';

const sampleData = require('../exampleMovieData.js');
var MovieComponent = require('./components/Movie.jsx');
var SearchComponent = require('./components/Search.jsx');
var AddMovieComponent = require('./components/AddMovie.jsx');



class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.setState({
      movies: this.props.movies
    })
  }

  render() {
    return (
      <div>
        <h3>Movie List</h3>
        <div id="add-movie">
          <AddMovieComponent.AddMovie/>
        </div>
        <div id="search-movies">
          <SearchComponent.Search/>
        </div>

        <table>
          <tbody>
            {
              this.state.movies.map((movie, index) =>           
                <MovieComponent.Movie
                  key={index}
                  movie={movie}
                />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={sampleData.exampleMovieData}/>, document.getElementById('app'));
