import React from 'react';
import ReactDOM  from 'react-dom';

import {Movie} from './components/Movie.jsx';
import {Search} from './components/Search.jsx';
import {AddMovie} from './components/AddMovie.jsx';
import {WatchedBar} from './components/WatchedBar.jsx';

var movies = [
  {title: 'Mean Girls', year: '2002', description: 'its about high school', url:'./images/heart.jpg'},
  {title: 'Hackers', year: '2010', description: 'IT is a stable career path', url:'./images/robo.jpg'},
  {title: 'The Grey', year:'1999', description: 'A coming of age movie', url:'./images/gandalf.jpg'},
  {title: 'Sunshine', year: '2009', description: 'Generally accepted as favorable weather', url:'./images/sun.jpg'},
  {title: 'Ex Machina', year:'2000', description: 'Do Androids Dream of Electric Sheep?', url:'./images/droid.jpg'},
];

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      'currMovies': movies,
      'addMovie': '',
      'watchList': [],
      'watchSelected': null,
      'selected': {title: null}
    };

    this.addMovie = this.addMovie.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFromWatchList = this.toggleFromWatchList.bind(this);
    this.toggleWatchedView = this.toggleWatchedView.bind(this);
    this.selectThis = this.selectThis.bind(this);
  }

  handleChange (event) {
    this.setState({'addMovie': event.target.value});
  }

  addMovie (event) {
    const {currMovies, addMovie} = this.state;
    event.preventDefault();
    var formatMovie = addMovie.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    currMovies.push({title: formatMovie});
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

  toggleFromWatchList (movieTitle) {
    const {watchList} = this.state;
    const watchListTitles = watchList.map(mov => mov.title);
    if (!watchListTitles.includes(movieTitle)) {
      this.setState({'watchList': [...watchList, {'title': movieTitle}]});
    } else {
      this.setState({'watchList': watchList.filter(movieObj => movieObj.title !== movieTitle)});
    }
  }

  toggleWatchedView (e) {
    e.preventDefault();
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

  selectThis(movie) {
    this.setState({'selected': movie});
  }

  render() {
    const {currMovies, addMovie, watchList, watchSelected, selected} = this.state;
    const watchListTitles = watchList.map(mov => mov.title);
    return (
      <div className="main">
      <div className="nav">
        <AddMovie value = {addMovie} submit = {this.addMovie} change = {this.handleChange}/>
        <Search submitSearch = {this.submitSearch} /> <WatchedBar watchSelected={watchSelected} toggleWatchedView={this.toggleWatchedView}/>
      </div>
      <div className="all-movs"> 
      {
          currMovies.map((movie) => 
          < Movie movie={movie} key={movie.title} toggleFromWatchList={this.toggleFromWatchList} watchListTitles={watchListTitles} selected={selected} selectThis={this.selectThis}/>
        )
      }
      </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
