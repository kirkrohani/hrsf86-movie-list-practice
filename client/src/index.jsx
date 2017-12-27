import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';

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
      'currMovies': movies
    };
  }

  submitSearch (event) {
    event.preventDefault();
    console.log('event val is', event.target.value);
    var selectedList = movies.filter(movie => movie.title.toLowerCase().includes(event.target.value));
    if(!selectedList.length) {
      selectedList = [{title: 'None Found'}];
    } 
    this.setState({'currMovies' : selectedList});
  }

  render() {
    return (
      <div>
      <Search submitSearch = {this.submitSearch.bind(this)} />
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
