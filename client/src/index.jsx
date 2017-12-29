import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData : [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},  
        {title: 'Ex Machina'} 
      ]
    };  
  }
 
  render () {
    return (
      <div>
        <div id='add'> <AddMovie movies={this.state.movieData}/> </div>
        <div id='search'> <Search movies={this.state.movieData}/> </div>
        <div id='movielist'>
          {this.state.movieData.map((indMovie)=>(<Movie movie={indMovie} key={indMovie.title}/>))}
        </div>
      </div>
    );
  }
};
ReactDOM.render(<MovieList />, document.getElementById('app'));
