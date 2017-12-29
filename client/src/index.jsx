import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Movie from './components/Movie.jsx';
import axios from 'axios';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovieList: [],
      server: 'http://127.0.0.1:3000'
    }
  }

  // getSearchQuery(query) {
  //   this.setState({
  //     query: query
  //   });
  // }
  componentDidMount() {
    // fetch(this.state.server)
    //   .then(
    //     (result) => {
    //       console.log('Get request succeeded :)')
    //        var stuff = result.body.getReader();
    //       // this.setState({
    //       //   currentMovieList:result
    //       // });
    //     },
    //     (error) => {
    //       console.log('Get request failed :(')
    //     }
    //   )
    axios.get(this.state.server + "/movies")
      .then(res => {
        this.setState({
          currentMovieList: res.data
        });
      });
  }

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
ReactDOM.render( <MovieList/>, document.getElementById('app'));