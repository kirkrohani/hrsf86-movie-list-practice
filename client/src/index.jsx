import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import axios from 'axios';

//import Search from './components/Search.jsx';
var movies = [
  {title: 'Mean Girls',
   description: 'blahbabhabhsdf',
   released: '1997',
   stars: '4'
  },
  {title: 'Hackers',
   description: 'blahbabhabhsdf',
   released: '1997',
   stars: '2'},
  {title: 'The Grey',
   description: 'blahbabhabhsdf',
   released: '1998',
   stars: '3'},
  {title: 'Sunshine',
   description: 'blahbabhabhsdf',
   released: '1987',
   stars: '1'},
  {title: 'Ex Machina',
   description: 'blahbabhabhsdf',
   released: '1999',
   stars: '4'},
];


class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
    	movies: movies,
    	view: 'movieView',
    	searchVal: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount(){
  axios.get('/movies')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

saveMovies(data){
  this.setState({
    movies: data
  })
}

handleChange(event) {
	//console.log('this is the event: ', event.target.value);
	this.setState({
		searchVal: event.target.value,
	})
}

handleSubmit(event) {
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
      	<form onSubmit={this.handleSubmit.bind(this)}>
			<label>
				<input type="text" placeholder="movie title"
					    		value={this.state.searchVal}
								onChange={this.handleChange}
						 />
				</label>
			<input type="submit" value="Search" />
		</form>
      	{this.switchView()}


      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
