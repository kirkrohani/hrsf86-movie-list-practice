import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/search.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import AddMovie from './components/AddMovie.jsx';

import axios from 'axios';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    search: '',
    watched: false
    }
  }
   addFilm(event) {
    const newItem = {};
    newItem.title = event;
    newItem.overview ='Kirk, you need to watch this movie';
    console.log(newItem);
    console.log(this.state.movies);
    // fetch('/movies', {
    //   method: 'POST',
    //   body: JSON.stringify(newItem);
    // }).then(function(response) {
    //   movies.push(response.json());
    // })
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
  handleClick(clicked) {
    clicked.watched = clicked.watched ? !clicked.watched: true;
    this.setState({
      watched: !this.state.watched
    });
    
  }
  searchClick (search) {
    const searchObj = {title: search};
    if (this.state.movies.includes(searchObj)) {
      this.state.movies = [
        {title: search}
      ]
    }
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=af29a1fd92e3ec3f4111aea875ad8350&language=en-US&page=1')
      .then(res => {
        const movies = res.data.results.map(obj => ({title: obj.title, overview: obj.overview}));
        this.setState({ movies });
      })
    
  }

  render() {

    return (
      <div>
      <div><Search searchClick={this.searchClick.bind(this)}/></div>
      <div><AddMovie search = {this.state.search} addFilm={this.addFilm.bind(this)}/></div>
      <ul>{this.state.movies.map((movie, index) => {return <Movie key={index} movie={movie} handleClick={this.handleClick.bind(this)} />})} </ul>
      </div>
    )
  }
}
export default MovieList;
ReactDOM.render( <MovieList />, document.getElementById('app'));
