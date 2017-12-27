import React from 'react';
import ReactDOM  from 'react-dom';

import {Movie} from './components/Movie.jsx';
import {Search} from './components/Search.jsx';
import {AddMovie} from './components/AddMovie.jsx';
import {WatchedBar} from './components/WatchedBar.jsx';

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
      'watchList': [],
      'watchSelected': null
    };

    this.addMovie = this.addMovie.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFromWatchList = this.toggleFromWatchList.bind(this);
    this.toggleWatchedView = this.toggleWatchedView.bind(this);
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
      this.setState({'watchList': [...watchList, {'title': movie}]});
    } else {
      this.setState({'watchList': watchList.filter(movieObj => movieObj.title !== movie)});
    }
  }

  toggleWatchedView (e) {
    console.log(e);
    const {watchSelected, watchList} = this.state;
    const watchListTitles = watchList.map(mov => mov.title);
    if (watchSelected === true) {
      this.setState({'watchSelected': false, 'currMovies': movies.filter(movieObj => !watchListTitles.includes(movieObj.title))});
    } else if (watchSelected === false) {
      this.setState({'watchSelected': null, 'currMovies': movies});
    } else {
      this.setState({'watchSelected': true, 'currMovies': watchList});
    }
  }

  render() {
    const {currMovies, addMovie, watchList, watchSelected} = this.state;
    return (
      <div className="main">
      <div className="nav">
        <AddMovie value = {addMovie} submit = {this.addMovie} change = {this.handleChange}/>
        <Search submitSearch = {this.submitSearch} /> <WatchedBar watchSelected={watchSelected} toggleWatchedView={this.toggleWatchedView}/>
      </div>
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
