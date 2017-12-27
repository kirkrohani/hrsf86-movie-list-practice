import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

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
      'addMovie': ''
    };

    this.addMovie = this.addMovie.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({'addMovie': event.target.value});
  }

  addMovie (event) {
    event.preventDefault();
    var formatMovie = this.state.addMovie.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    this.state.currMovies.push({title: formatArray});
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

  render() {
    return (
      <div>
      <AddMovie value = {this.state.addMovie} submit = {this.addMovie} change = {this.handleChange}/>
      <Search submitSearch = {this.submitSearch} />
      {
        this.state.currMovies.map((movie, i) => 
          < Movie title={movie.title} key={i}/>
        )
      }
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
