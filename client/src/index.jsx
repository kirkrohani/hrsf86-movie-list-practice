import _ from 'lodash';
import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import AddMovie from './components/AddMovie.jsx';
import Search from './components/Search.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import axios from 'axios';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      //you may need to not have movies be props later, could cause issues with re-rendering and won't update propery
      showWatched: true,
      showUnwatched: true,
      moviesToDisplay: [],
      movies: [],
      movieDetail: {title: null}
    };
    this.showAll = this.showAll.bind(this);
    this.showUnwatched = this.showUnwatched.bind(this);
    this.showWatched = this.showWatched.bind(this);
    this.filterList = this.filterList.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.search = this.search.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.resetDetails = this.resetDetails.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }
  getMovies() {
    let stupidHackyThisBinding = this; //so tired of async calls. WHY DOESN'T BIND WORK HERE
    axios.get('/movies')
    .then(function(res) {
      stupidHackyThisBinding.setState({movies: res.data}, stupidHackyThisBinding.filterList);
    })
    .catch(function(error) {
      console.log('there was an error with get request', error);
    });
  }
  addMovie(val) {
    if (val) {
      axios.post('/movie', {query: val})
      .then((res) => {
        // console.log(res);
        this.getMovies();
      })
      .catch(function(error) {
        console.log('there was an error with post request', error);
      });
    }
  }
  search(val) {
    if (val) {
      val = val.toLowerCase();
      let filtered = _.filter(this.state.movies, function(mov) {
        return mov.title.toLowerCase().includes(val);
      });
      this.filterList(filtered);
    }
    else {
      this.filterList();
    }
  }
  filterList(movieList) {
    movieList = movieList || this.state.movies;
    let filtered = [];
    movieList.forEach((movie) => {
      let expression = (movie.watched && this.state.showWatched) || (!movie.watched && this.state.showUnwatched);
      if (expression) {
        filtered.push(movie);
      }
    });
    this.setState({moviesToDisplay: filtered });
    this.resetDetails();
  }
  toggleDetails(movie) {
    if (this.state.movieDetail.title !== movie.title) {
      this.setState({movieDetail: movie});
    }
    else {
      this.resetDetails();
    }
  }
  resetDetails() {
    this.setState({ movieDetail: { title: null } });
  }
  componentDidMount() {
    this.getMovies();
    // this.moviesToDisplay = this.filterList();
  }
  showUnwatched() {
    this.setState({showWatched: false, showUnwatched: true}, this.filterList);
  }
  showWatched() {
    this.setState({showWatched: true, showUnwatched: false}, this.filterList);
  }
  showAll() {
    this.setState({showWatched: true, showUnwatched: true}, this.filterList);
  }
  handleCheck(movie) {
    let movies = this.state.movies; //this shouldn't be necessary but getting movies async breaks effffffffffferything
    movie.watched = !movie.watched;
    this.setState({movies});
    if (!(this.state.showUnwatched && this.state.showWatched)) {
      this.filterList();
    }
  }
  render() {
    return (
      <div>
        <AddMovie handler={this.addMovie} />
        <ul className="nav nav-pills">
          <li className="nav-item" onClick={this.showAll}>
            <a className="nav-link active" data-toggle="tab" href="#">All</a>
          </li>
          <li className="nav-item" onClick={this.showWatched}>
            <a className="nav-link" data-toggle="tab" href="#">Watched</a>
          </li>
          <li className="nav-item" onClick={this.showUnwatched}>
            <a className="nav-link" data-toggle="tab" href="#">To Watch</a>
          </li>
          <li ><Search handler={this.search}/></li>
        </ul>
        
        <div className="movieList list-group">
          {
            this.state.moviesToDisplay.map((movie, idx) => {
              return ([
                <Movie 
                  className="movie"
                  movie={movie} 
                  key={idx} 
                  show={true}
                  handler={this.toggleDetails}
                />,
                <MovieDetails 
                  movie={movie} 
                  key={movie.title} 
                  show={movie.title === this.state.movieDetail.title} 
                  handleCheck={this.handleCheck}
                />
              ]);
            })
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
