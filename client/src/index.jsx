import React from 'react';
import ReactDOM  from 'react-dom';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: '',
      finalSearch: '',
      currentAddMovie: '',
      movies: [
        {title: 'Mean Girls', director: 'some director0', year: 1980, watched: false, showPanel: false},
        {title: 'Hackers', director: 'some director1', year: 1981, watched: false, showPanel: false},
        {title: 'The Grey', director: 'some director2', year: 1982, watched: false, showPanel: false},
        {title: 'Sunshine', director: 'some director3', year: 1983, watched: false, showPanel: false},
        {title: 'Ex Machina', director: 'some director4', year: 1984, watched: false, showPanel: false}
      ],
      displayWatchedMovies: true,
      displayUnwatchedMovies: true
    };
  }

  handleSearchChange(event) {
    this.setState({currentSearch: event.target.value});
  }

  handleSearchClick(event) {
    this.setState({finalSearch: this.state.currentSearch,
                  currentSearch: ''});
    event.preventDefault();
  }

  handleAddChange(event) {
    this.setState({currentAddMovie: event.target.value});
  }

  handleAddClick(event) {

    var movies = this.state.movies.slice();
    var newObj = {};
    newObj['title'] = this.state.currentAddMovie;
    newObj['director'] = 'some director' + this.state.movies.length - 1;
    newObj['year'] = 1980 + this.state.movies.length - 1;
    newObj['watched'] = false;
    newObj['showPanel'] = false;
    movies.push(newObj);
    this.setState({movies: movies, currentAddMovie: ''});
    event.preventDefault();
  }

  handleWatchedToggle(movie) {
    for(var i = 0; i < this.state.movies.length; i++) {
      if(this.state.movies[i].title === movie.title) {
        var movies = this.state.movies.slice();
        movies[i].watched = !movies[i].watched;
        this.setState({movies: movies})
        console.log(this.state.movies[i].title, 'watched:', this.state.movies[i].watched);
      }
    }
  }

  togglePanel(movie) {
    for(var i = 0; i < this.state.movies.length; i++) {
      if(this.state.movies[i].title === movie.title) {
        var movies = this.state.movies.slice();
        movies[i].showPanel = !movies[i].showPanel;
        this.setState({movies: movies})
      }
    }
    console.log('toggle panel for movie:', movie.title);
  }

  render() {
    var displayResults = [];
    this.state.movies.forEach(movie => {
      if(movie.title.includes(this.state.finalSearch)) {
        if((this.state.displayWatchedMovies && movie.watched) ||
            (this.state.displayUnwatchedMovies && !movie.watched) ||
            (this.state.displayWatchedMovies && this.state.displayUnwatchedMovies)) {
          displayResults.push(
            <div>
              <span id={movie.title} onClick={() => this.togglePanel(movie)}>
                {movie.title}
              </span>
              <span>
                <input type="button" value="watched" onClick={() => this.handleWatchedToggle(movie)}/>
              </span>
            </div>
          );
          if(movie.showPanel) {
            displayResults.push(
              <div>
                <tr>
                  <td>title</td>
                  <td>{movie.title}</td>
                </tr>
                <tr>
                  <td>director</td>
                  <td>{movie.director}</td>
                </tr>
                <tr>
                  <td>year</td>
                  <td>{movie.year}</td>
                </tr>
              </div>
            );
          }
        }
      }
    })

    console.log('movie list:', displayResults);

    return (
      <div>
        <div>
          Search:<input type="text" value={ this.state.currentSearch } onChange={() => this.handleSearchChange() } />
          <input
            type="button"
            value="Submit"
            onClick={this.handleSearchClick}
          />
        </div>
        <div>
          Add Movie:<input type="text" value={ this.state.currentAddMovie } onChange={() => this.handleAddChange() } />
          <input
            type="button"
            value="Add"
            onClick={this.handleAddClick}
          />
        </div>
        <div>
          Search Results:
          {displayResults.map(result =>
            <span>{result}</span>
          )}
        </div>
        <div>
          <input
            type="button"
            value="Display Watched Movies"
            onClick={() => this.setState({displayWatchedMovies: true,
                                          displayUnwatchedMovies: false})}
          />
          <input
            type="button"
            value="Display Unwatched Movies"
            onClick={() => this.setState({displayWatchedMovies: false,
                                          displayUnwatchedMovies: true})}
          />
          <input
            type="button"
            value="Display All Movies"
            onClick={() => this.setState({displayWatchedMovies: true,
                                          displayUnwatchedMovies: true})}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
