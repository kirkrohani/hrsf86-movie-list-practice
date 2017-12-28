// global.jQuery = require('jquery');
// import $ from 'jquery';

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx'
import AddMovie from './components/AddMovie.jsx'
import Search from './components/Search.jsx'
import MovieDetails from './components/MovieDetails.jsx'


var movies = [
  { title: 'Mean Girls', watched:true },
  { title: 'Hackers', watched: true },
  { title: 'The Grey', watched: false },
  { title: 'Sunshine', watched: false },
  { title: 'Ex Machina', watched: true },
];

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      //you may need to not have movies be props later, could cause issues with re-rendering and won't update propery
      movies: movies,
      showWatched: true,
      showUnwatched: false
    };
    this.showAll = this.showAll.bind(this);
    this.showUnwatched = this.showUnwatched.bind(this);
    this.showWatched = this.showWatched.bind(this);
  }
  // toggleWatched(movie) {
  //   this.state.movie.watched = !this.movie.watched;
  // }
  showUnwatched() {
    this.setState({showWatched: false, showUnwatched: true});
  }
  showWatched() {
    this.setState({showWatched: true, showUnwatched: false});
  }
  showAll() {
    this.setState({showWatched: true, showUnwatched: true});
  }
  render() {
    return (
      <div>
        <AddMovie />
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
          <li ><Search /></li>
        </ul>
        
        <div className="movieList list-group">
          {
            movies.map((movie, idx) => {
              return ([
                <Movie movie={movie} key={idx} show={(movie.watched && this.state.showWatched) || (!movie.watched && this.state.showUnwatched)}/>,
                <MovieDetails show={(movie.watched && this.state.showWatched) || (!movie.watched && this.state.showUnwatched)}/>
              ]);
            })
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
