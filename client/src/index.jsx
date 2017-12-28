import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Movies from './components/Movies.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: this.props.movies
    }
  }

  render() {
    return (
      <div>
        <Search list={this.props.list}/>
        <AddMovie list={this.props.list}/>
        <Movies list={this.props.list}/>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));