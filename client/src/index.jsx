import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Movie from './components/Movie.jsx';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovieList: props.movies,
      // query: 'cat'
    }
  }

  // getSearchQuery(query) {
  //   this.setState({
  //     query: query
  //   });
  // }

  filterMLbyQuery(query) {
    var filteredList = this.state.currentMovieList.filter((movie) => {
      return movie.title.toLowerCase().includes(query);
    });
    this.setState({
      currentMovieList: filteredList
    });
  }

  render() {
    return (
      <div className="movie-list-app">
        <div className="navbar">
          <div><Search  filterMLbyQuery={this.filterMLbyQuery.bind(this)}/></div>
          <div><AddMovie/></div>
        </div>
        <div className="toggle-view">
          <div></div>
        </div>
        <div className="movie-list">
          <div>
            {this.state.currentMovieList.map((movie, i) => <Movie movie = {movie} /*clickFn = {this.clickFn.bind(this)}*/ key = {i}/> )}
          </div>
        </div>
      </div>
    )
  }
}
window.movies = [
  {title: 'Mean Girls', description : 'descrptive stuff'},
  {title: 'Hackers', description : 'descrptive stuff'},
  {title: 'The Grey', description : 'descrptive stuff'},
  {title: 'Sunshine', description : 'descrptive stuff'},
  {title: 'Ex Machina', description : 'descrptive stuff'},
];
ReactDOM.render( <MovieList movies = {window.movies}/>, document.getElementById('app'));