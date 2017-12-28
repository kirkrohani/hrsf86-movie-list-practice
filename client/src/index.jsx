import _ from 'lodash';
import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx'
import AddMovie from './components/AddMovie.jsx'
import Search from './components/Search.jsx'
import MovieDetails from './components/MovieDetails.jsx'


var movies = [
  { title: 'Mean Girls', watched:true},
  { title: 'Hackers', watched: true},
  { title: 'The Grey', watched: false},
  { title: 'Sunshine', watched: false},
  { title: 'Ex Machina', watched: true}
];

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      //you may need to not have movies be props later, could cause issues with re-rendering and won't update propery
      showWatched: true,
      showUnwatched: true,
      movies: movies,
      moviesToDisplay: [],
      movieDetail: {title: null}
    };
    this.showAll = this.showAll.bind(this);
    this.showUnwatched = this.showUnwatched.bind(this);
    this.showWatched = this.showWatched.bind(this);
    this.filterList = this.filterList.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.search = this.search.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }
  addMovie(val) {
    if (val) {
      this.setState({ movies: this.state.movies.concat({title: val })}, this.filterList);
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
  }
  toggleDetails(movie) {
    if (this.state.movieDetail.title !== movie.title) {
      this.setState({movieDetail: movie});
    }
    else {
      this.setState({ movieDetail: {title: null} });
    }
  }
  componentDidMount() {
    this.moviesToDisplay = this.filterList();
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
                <Movie movie={movie} key={idx} show={true} handler={this.toggleDetails}/>,
                <MovieDetails movie={movie} key={movie.title} show={movie.title === this.state.movieDetail.title} />
              ]);
            })
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
