import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from  './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

const https = require('https');
const axios = require('axios');
// const request = require('request');
var $ = require('jquery');

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = { movies: [{title: 'Mean Girls', runtime: '150 minutes', year: 2005}], 
                   watchedMoviesShown: 'neither'
                 }
  }

  componentDidMount() {
    https.get('/movies', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        this.setState({
          movies: JSON.parse(data)
        })
      console.log(JSON.parse(data));
    });
  });
    // $.ajax({
    //   url: 'http://localhost:3000/load',
       
    // })
  }


  onSubmitClick(searchVal) {
  	var searchMovs = [];
  	for (var i = 0; i < this.state.movies.length; i++) {
  	  if (this.state.movies[i].title.toLowerCase().includes(searchVal)) {
  	  	searchMovs.push(this.state.movies[i]);
  	  }

  	if (searchMovs.length <= 0) {
  		this.setState({
  		  movies: [
	        {title: 'No movies found'},
		  ]
  		});
  	} else {
  	    this.setState({
  	      movies: searchMovs
  	    });
      }
    }
  }

  onAddClick(addVal) {
    var instance = this;
    axios.post('/movies', 
      {
        title: addVal
      })
      .then(function (response) {
        console.log(response.data);
        instance.setState((prevState) => {
          return {
            movies: response.data,
            watchedMoviesShown: prevState.watchedMoviesShown
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onWatchedClick() {
    this.setState((prevState) => {
    	return {movies: prevState.movies, watchedMoviesShown: 'yes'}
    })
  }

  onNotWatchedClick() {
    this.setState((prevState) => {
      return {movies: prevState.movies, watchedMoviesShown: 'no'}
    })	
  }

  render() {
    return (
      <div>
      	<AddMovie onAddClick = {this.onAddClick.bind(this)}/>
      	<Search onSubmitClick = {this.onSubmitClick.bind(this)}/>
      	<div className = 'toggleDiv'>
      	  <button className = 'toggle' onClick = {() => this.onWatchedClick()}> Watched </button>
      	  <button className = 'toggle' onClick = {() => this.onNotWatchedClick()}> To Watch </button> 
      	</div>

    	{this.state.movies.map(movie => <Movie movie = {movie} watchedMoviesShown = {this.state.watchedMoviesShown}/>)}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
