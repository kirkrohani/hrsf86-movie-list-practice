import React from 'react';
import ReactDOM  from 'react-dom';

import {Movie} from './components/Movie.jsx';
import {Search} from './components/Search.jsx';
import {AddMovie} from './components/AddMovie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      'currMovies': movies,
      'addMovie': '',
      'watchList': []
    };

    this.addMovie = this.addMovie.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFromWatchList = this.toggleFromWatchList.bind(this);
  }

  handleChange (event) {
    this.setState({'addMovie': event.target.value});
  }

  addMovie (event) {
    const {currMovies, addMovie} = this.state;
    event.preventDefault();
    var formatMovie = addMovie.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    currMovies.push({title: formatArray});
    this.setState({'addMovie': ''});
  }

  submitSearch (event) {
    event.preventDefault();
    var filteredList = movies.filter(movie => movie.title.toLowerCase().includes(event.target.value));
    if(!filteredList.length) {
      filteredList = [{title: 'None Found'}];
    } 
    this.setState({'currMovies' : filteredList});
  }

  toggleFromWatchList (movie) {
    const {watchList} = this.state;
    if (!watchList.includes(movie)) {
      this.setState({'watchList': [...watchList, movie]});
    } else {
      this.setState({'watchList': watchList.filter(title => title !== movie)});
    }
  }

  render() {
    const {currMovies, addMovie, watchList} = this.state;
    return (
      <div>
      <AddMovie value = {addMovie} submit = {this.addMovie} change = {this.handleChange}/>
      <Search submitSearch = {this.submitSearch} />
      {
          currMovies.map(({title}) => 
          < Movie title={title} key={title} toggleFromWatchList={this.toggleFromWatchList} />
        )
      }
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
