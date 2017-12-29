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
      list: this.props.list,
      currentView: this.props.list
    };

  this.searchList = this.searchList.bind(this);
  this.addToList = this.addToList.bind(this);
  }

  searchList(searchTerm) {
    var list = this.props.list;
    var results = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].original_title.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(list[i]);
      }
    }
    this.setState({currentView: results});
  }

  addToList(title) {
    //search movieDB for movie name with title
    //once GET request is done, display clickable array of matching movies
    //when user clicks on movie, add that object to list array
  }

  render() {
    return (
      <div>
        <Search 
          list={this.state.list}
          search={this.searchList}
          />
        <AddMovie list={this.props.list} />
        <Movies list={this.state.currentView} />
      </div>
    );
  }
}

ReactDOM.render( <MovieList list={data.movieList} />, document.getElementById('app'));