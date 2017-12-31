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
    var db = this.props.database; //this through line 39 will later be replaced by title query to Moviesdb
    var results = [];
    for (var i = 0; i < db.length; i++) {
      if (db[i].original_title.toLowerCase().includes(title.toLowerCase())) {
        results.push(db[i]);
      }
    }
    if (results.length === 1) {
      this.props.list.push(results[0]);
    } else if (title.length === 0) {
      alert('Too few characters entered, please try again.');
    } else {
      var foundMovies = 'Found: \n';
      results.forEach((item) => {
        foundMovies += `${item.original_title} \n`
      });
      alert(`Multiple movies found, please retry with an exact title. \n${foundMovies}`)

      //do something that lets a user pick one movie from among results
      //  display all results with a header "Multiple results found. 
      //    Click on the correct movie to add it to the list"
      //Steps: first display the results array
      //Then display the multiple results message
      //setup a click handler for this instance to add a clicked movie to list
      //once click is detected, add movie, remove click handler, display
      //  "'movie.title' added to list"
      // 
    }
    this.setState({currentView: this.props.list})
  }

  render() {
    return (
      <div className="app-body">
       <AddMovie 
          list={this.state.list}
          database={this.database}
          add={this.addToList}
          />
        <Search 
          list={this.state.list}
          search={this.searchList}
          />
        <Movies list={this.state.currentView} />
      </div>
    );
  }
}

ReactDOM.render( <MovieList list={data.movieList} database={data.database} />, document.getElementById('app'));