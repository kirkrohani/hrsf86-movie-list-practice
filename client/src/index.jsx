import React from 'react';
import ReactDOM  from 'react-dom';
import MovieList from './components/MovieList.jsx'
import AddMovie from './components/AddMovie.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import Search from './components/Search.jsx';

var movies = [
  {title: 'Mean Girls', year: '2012', rating: '8'},
  {title: 'Hackers', year: '2012', rating: '8'},
  {title: 'The Grey', year: '2012', rating: '8'},
  {title: 'Sunshine', year: '2012', rating: '8'},
  {title: 'Ex Machina', year: '2012', rating: '8'},
  {title: '50 Shades of Grey', year: '2012', rating: '8'}
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
    }
  }

  filterMovies (target) {
    var filteredMovies = this.state.movies.filter(movie => {
      var title = movie.title.toLowerCase();
      var lowerCaseTarget = target.toLowerCase();
      return title.includes(lowerCaseTarget);
    });

    this.setState({
      movies: filteredMovies
    });
    document.getElementsByClassName('search')['0'].value = '';
  }

  clearFilter () {
    this.setState({
      movies: movies,
    })
  }

  addMovieToList (target) {

    var newMovies = this.state.movies.concat([{title: target}]);
    movies = movies.concat([{title: target}]);
    this.setState({
      movies: newMovies
    })
    document.getElementsByClassName('addMovie')['0'].value = '';
  }

  renderWatched () {
    var elements = document.getElementsByClassName('towatch');
    for (var i = 0; i < elements.length; i ++) {
      elements[i].style.display = 'none';
    }
  }

  renderToWatch () {
    var elements = document.getElementsByClassName('watched');
    for (var i = 0; i < elements.length; i ++) {
      elements[i].style.display = 'none';
    }
    var elements = document.getElementsByClassName('towatch');
    for (var i = 0; i < elements.length; i ++) {
      elements[i].style.display = 'block';
    }
  }

  renderWatched () {
    var elements = document.getElementsByClassName('watched');
    for (var i = 0; i < elements.length; i ++) {
      elements[i].style.display = 'block';
    }
    var elements = document.getElementsByClassName('towatch');
    for (var i = 0; i < elements.length; i ++) {
      elements[i].style.display = 'none';
    }
  }

  renderAll () {
    var elements = document.getElementsByClassName('watched');
    for (var i = 0; i < elements.length; i ++) {
      elements[i].style.display = 'block';
    }
    var elements = document.getElementsByClassName('towatch');
    for (var i = 0; i < elements.length; i ++) {
      elements[i].style.display = 'block';
    }
  }

  render() {
    return (
      <div>
        <Search filterMovies={this.filterMovies.bind(this)} clearFilter={this.clearFilter.bind(this)}/>
        <AddMovie addMovieToList={this.addMovieToList.bind(this)}/>
        <div className="watchListButton">
          <button type="button" onClick={(e) => this.renderWatched()}>Watched List</button>
          <button type="button" onClick={(e) => this.renderToWatch()}>To Watch List</button>
          <button type="button" onClick={(e) => this.renderAll()}>View All</button>
        </div>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app'));
