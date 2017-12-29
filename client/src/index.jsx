import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/search.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import AddMovie from './components/AddMovie.jsx';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    search: '',
    done: false
    }
  }
   addFilm(event) {
    const newItem = {};
    newItem.title = event;
    console.log(newItem);
    console.log(this.state.movies);
    this.setState({movies: [...this.state.movies, newItem]});

      // post('/movies', {
      //   title: value
      // })
      // .then(function(response) {
      //   console.log(response);
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    //   movies: [...this.state.movies, {title: this.search}]
    // });
  }
  handleClick (search) {
    const searchObj = {title: search};
    if (this.state.movies.includes(searchObj)) {
      this.state.movies = [
        {title: search}
      ]
    }
  }

  toggleClick() {
    this.setState({
      done: !this.state.done
    })
  }
  componentDidMount() {
    fetch('/movies')
      .then(res => res.json())
      .then(movies => this.setState({movies: movies}));
  }

  render() {
    return (
      <div>
      <div><Search handleClick={this.handleClick.bind(this)}/></div>
      <div><AddMovie search = {this.state.search} addFilm={this.addFilm.bind(this)}/></div>
      <div><Movie movies={this.state.movies} /></div>
     
      </div>
    )
  }
}
export default MovieList;
ReactDOM.render( <MovieList />, document.getElementById('app'));
