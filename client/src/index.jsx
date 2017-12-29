import React from 'react';
import ReactDOM  from 'react-dom';
import {Movie} from './components/Movie.jsx'
import {Search} from './components/Search.jsx'
import {AddMovie} from './components/AddMovie.jsx'


// var movies = [
//   {title: 'Mean Girls',
//   year: 2003,
//   MetaScore: 80},
//   {title: 'Hackers',
//   year: 1995,
//   MetaScore: 46},
//   {title: 'The Grey', 
//   year: 1986,
//   MetaScore: 65},
//   {title: 'Sunshine',
//   year: 2007,
//   MetaScore: 80},
//   {title: 'Ex Machina',
//   year: 2012,
//   MetaScore: 90},
//   {title: 'Sam I Am',
//   year: 1981,
//   MetaScore: 43},
//   {title: 'Santa Clause 2',
//   years: 1999,
//   MetaScore: 20},
//   {title: 'Secret Garden',
//   year: 1986,
//   MetaScore: 59}
// ];





class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovies: [],
      watchedMovies: [],
      toWatchMovies: []
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    console.log('before get')
  $.get('http://127.0.0.1:3000/load', (data) => {
      this.setState({
        movies: data,
        selectedMovies: data,
        toWatchMovies: data
      });
    })
  }

  addMovie(text) {
    alert(text);
    var data =   {
      title: text,
      year: 2003,
      MetaScore: 80
    }
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:3000/movies',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: () => {
        alert('movie submitted');
        this.getMovies();
        
      },
      error: () => alert('oops')
    })
  }


  handleSubmit(text) {
      
    var selectedMovies = [];
    this.state.movies.forEach( (movie) => {
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
        <AddMovie addMovie={this.addMovie.bind(this)}/>
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

