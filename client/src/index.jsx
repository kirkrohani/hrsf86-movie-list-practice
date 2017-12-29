import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Movies from './components/Movies.jsx';

const data = require('../../database/index.js');

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }

  render() {
    return (
      <div>
         <Search list={this.props.list} />
         <AddMovie list={this.props.list} />
         <Movies list={this.props.list} />
      </div>
    );
  }
}

ReactDOM.render( <MovieList list={data.movieList}/>, document.getElementById('app'));

//  <Search list={this.props.list}/>
//  <AddMovie list={this.props.list}/>
//  <Movies list={this.props.list}/>
//      