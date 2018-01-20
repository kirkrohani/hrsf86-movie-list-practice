import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import axios from 'axios';
import $ from "jquery";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
    	movies: [],
    	view: 'movieView',
    	searchVal: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//WillMount instead of DidMount because I want to pull from the database before the first render;
componentWillMount(){
  axios.get('/movies')
      .then( (response) => {
          console.log(response.data)
        this.setState({
          movies: response.data
        })
      })
      .catch( (error) => {
        console.log(error);
      });
}

//STILL NEED GET TO API

//submits to database
addMovie(eventObj){
axios.post('/movie', {title: eventObj})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
//handle search change
handleChange(event) {
	//console.log('this is the event: ', event.target.value);
	this.setState({
		searchVal: event.target.value,
	})
}
//submit new movie, this does not check an API yet
handleSubmit() {
  this.addMovie(this.state.searchVal)
	alert('an event '+ this.state.searchVal + ' has occured')
}

//currently only one view
switchView() {
	if(this.state.view === 'movieView') {
		return <Movie movies={this.state.movies} searchVal={this.state.searchVal}/>
	} else if(this.state.view === 'searchedView') {
		return <div></div>
	}
}
//need to create toggle for watched and unwatched movies
//need to create a toggle for

  render() {
    return (
      <div>
      	<form onSubmit={this.handleSubmit}>
			   <label>
				  <input type="text" placeholder="movie title"
					    	 value={this.state.searchVal}
								 onChange={this.handleChange}
						 />
				  </label>
			   <input type="submit" value="Add Movie.." />
		    </form>
    <div> 
      <button>Watched</button>
      <button>All</button>
    </div>
      	{this.switchView()}
    </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
