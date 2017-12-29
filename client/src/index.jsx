import React from 'react';
import ReactDOM  from 'react-dom';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: '',
      finalSearch: '',
      currentAddMovie: '',
      movies: [],
      displayWatchedMovies: true,
      displayUnwatchedMovies: true,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('/load')
      .then((result) => {
        console.log(result);
        this.setState({
          isLoaded: true
        });
      })
      .then((result) => {
        fetch('/movies')
          .then(res => res.json())
          .then(result => {
            this.setState({
              movies: result
            });
            console.log('after mount, state variables:', this.state)
          });
      })
      .catch((error) => {
        console.error('on load got error:', error);
      });

  }

  handleSearchChange(event) {
    this.setState({currentSearch: event.target.value});
    event.preventDefault();
  }

  handleSearchClick(event) {
    this.setState({finalSearch: this.state.currentSearch,
                  currentSearch: ''});
    event.preventDefault();
  }

  handleAddChange(event) {
    this.setState({currentAddMovie: event.target.value});
    event.preventDefault();
  }

  handleAddClick(event) {
    var newObj = {};
    newObj['title'] = this.state.currentAddMovie;
    newObj['director'] = 'some director' + this.state.movies.length - 1;
    newObj['year'] = 1980 + this.state.movies.length - 1;
    this.setState({currentAddMovie: ''});

    // post the new movie
    var request = new Request('/movie',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(newObj)
    });
    fetch(request)
      // .then(res => res.json())
      // .then((response) => {
      //   console.log('POST response body:', response);
      //   this.setState({
      //     movies: response
      //   });
      // },
      .then((result) => {
        fetch('/movies')
          .then(res => res.json())
          .then(result => {
            this.setState({
              movies: result
            })
          })
        },
      (error) => {
        console.error('on post got error:', error);
      }
    );
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
          var posterImg = <img src={'http://image.tmdb.org/t/p/w92/ + movie.poster_path'} />;
          displayResults.push(
            <div>
              <span id={movie.title} onClick={() => this.togglePanel(movie)}>
                <img src={'http://image.tmdb.org/t/p/w92/' + movie.poster_path} />{movie.title}
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
                  <td>summary</td>
                  <td>{movie.overview}</td>
                </tr>
                <tr>
                  <td>release date</td>
                  <td>{movie.release_date}</td>
                </tr>
              </div>
            );
          }
        }
      }
    })

    return (
      <div>
        <div>
          Search:<input type="text" value={ this.state.currentSearch } onChange={(event) => this.handleSearchChange(event) } />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSearchClick(event)}
          />
        </div>
        <div>
          Add Movie:<input type="text" value={ this.state.currentAddMovie } onChange={(event) => this.handleAddChange(event) } />
          <input
            type="button"
            value="Add"
            onClick={(event) => this.handleAddClick(event)}
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
