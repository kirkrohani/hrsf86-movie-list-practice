import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from  './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {movies:[
      {title: 'Mean Girls'},
      {title: 'Hackers'},
  	  {title: 'The Grey'},
  	  {title: 'Sunshine'},
  	  {title: 'Ex Machina'},
	]}
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
  	this.setState((prevState) => {
  		return {movies: prevState.movies.concat([{title: addVal}])}
  	});
  }


  render() {
    return (
      <div>
      	<AddMovie onAddClick = {this.onAddClick.bind(this)}/>
      	<Search onSubmitClick = {this.onSubmitClick.bind(this)}/>
    	{this.state.movies.map(movie => <Movie movie = {movie}/>)}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
