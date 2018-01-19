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

componentDidMount(){
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
// saveMovies(data){
//   this.setState({
//     movies: data
//   })
// }

addMovie(eventObj){
axios.post('/movie', {title: eventObj})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

handleChange(event) {
	console.log('this is the event: ', event.target.value);
	this.setState({
		searchVal: event.target.value,
	})
}

handleSubmit() {
  this.addMovie(this.state.searchVal)
	alert('an event '+ this.state.searchVal + ' has occured')
}

switchView() {
	if(this.state.view === 'movieView') {
		return <Movie movies={this.state.movies} searchVal={this.state.searchVal}/>
	} else if(this.state.view === 'searchedView') {
		return <div></div>
	}
}  

  render() {
    //getMovies();
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
    <div> <button>Watched</button>
          <button>All</button>

    </div>
      	{this.switchView()}
      </div>
    )
  }
}
ReactDOM.render( <MovieList />, document.getElementById('app'));
