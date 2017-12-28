import React from 'react';
import ReactDOM  from 'react-dom';
import {Movie} from './components/Movie.jsx'
import {Search} from './components/Search.jsx'
import {AddMovie} from './components/AddMovie.jsx'


var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Sam I Am'},
  {title: 'Santa Clause 2'},
  {title: 'Secret Garden'}
];

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movies,
      selectedMovies: movies,
      watchedMovies: [],
      toWatchMovies: movies
    }
  }

  handleSubmit(text) {
      
    var selectedMovies = [];
    movies.forEach( (movie) => {
      if (movie.title.includes(text)) {
        selectedMovies.push(movie);
      }
    })

    this.setState({
      selectedMovies: selectedMovies
    })

  }

  showWatchList() {
    //
    this.setState({
      selectedMovies: this.state.watchedMovies
    })
  }

  showToWatchList() {
    this.setState({
      selectedMovies: this.state.toWatchMovies
    })
  }

  addToWatchList(element, movie) {

    var $element = $(element);
    if ($element.text() === 'Watched!') {
      $element.text('Unwatched')
      this.state.toWatchMovies.push(movie)
      var newWatchList = _.reject(this.state.watchedMovies, (el) => {
        return el.title === movie.title
      })
      this.setState({
        watchedMovies: newWatchList
        }) 
    } else{
      $element.text('Watched!');
      this.state.watchedMovies.push(movie)
      var newToWatchList = _.reject(this.state.toWatchMovies, (el) => {
        return el.title === movie.title
      })
      this.setState({
        toWatchMovies: newToWatchList
      })
    }
    
    //alert(this.state.watchedMovies);
  }

  render() {
    return (
      <div>
        <div>
        <AddMovie />
        </div>
        <div id="nav">
          <div 
          id="watched"
          onClick={ () => this.showWatchList()}
          >Watched</div>
          <div id="to-watch"
          onClick={() => this.showToWatchList()}
          >To Watch</div>
          <Search 
          handleSubmit={this.handleSubmit.bind(this)}
          />
        </div>
        <div>
        {this.state.movies.map( (movie) => <Movie 
          movie={movie}
          addToWatchList={this.addToWatchList.bind(this)}
          display={_.chain(this.state.selectedMovies).pluck('title').contains(movie.title).toString()}
          /> )}
        </div>        
        
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));

