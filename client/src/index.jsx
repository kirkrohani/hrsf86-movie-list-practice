import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Tabs from './components/Tabs.jsx';
import _ from 'underscore';
import axios from 'axios';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      filteredBy: null,
      activeTab: 'toWatch'
    }
  }

  componentDidMount() {
    this.refreshMovies();
  }

  refreshMovies(callback) {
    axios.get('/movies')
      .then((response) => {
        this.setState({
          allMovies: response.data
        })
        callback();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  addNewMovie(title) {
    // update movie if it's a new unique title
    let existsInList = _.some(this.state.allMovies, (movie) => {
      return movie.title === title;
    })

    /// clear filter and display all movies
    if (!existsInList) {
      axios.post('/movie', {
        title: title
      })
      .then((response)=> {
        console.log(response);
        this.refreshMovies(() => {
           this.setState({
            filteredBy: null
          }); 
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  updateMoviesList(query) {
    this.setState({
      filteredBy: query
    })
  }

  returnFilteredMovies(query) {
  
    let queryMovies = _.filter(this.state.allMovies, (movie) => {
      let passesQuery = query ? movie.title.toUpperCase().includes(query.toUpperCase()) : true;
      let isWatched = movie.watched;
      var matchesActiveTabState = (this.state.activeTab === 'toWatch')
        ? !isWatched 
        : isWatched;
      return passesQuery && matchesActiveTabState;
    });

    return queryMovies;
  }

  changeTab(newTab) {
    if (this.state.activeTab !== newTab) {
      this.setState({
        activeTab: newTab
      })
    }
  }

  toggleWatched(key) {
    let copyOfMovies = this.state.allMovies.slice();
    let toggledMovies = copyOfMovies && copyOfMovies.map((movie) => {
      if (movie.title === key) {
        movie.watched = !movie.watched;
      }
      return movie;
    })
    this.setState({
      allMovies: toggledMovies
    })
  }

  render() {
    let filteredMovies = this.returnFilteredMovies(this.state.filteredBy);

    let movies = filteredMovies && filteredMovies.map((movie) => {
      return <Movie 
        key={movie.title}
        watched={movie.watched ? true : false}
        title={movie.title}
        year={movie.year}
        rating={movie.rating}
        toggleWatched={this.toggleWatched.bind(this)}/>
    })

    return (
      <div>
        <Search handleSearch={ this.updateMoviesList.bind(this) } />
        <AddMovie addNewMovie={ this.addNewMovie.bind(this) } />
        <h2>Movie List</h2>
        <Tabs 
          activeTab={this.state.activeTab} 
          changeTabSelection={ this.changeTab.bind(this) } 
        />
        <div className='movieContainer'>
          {movies.length > 0 ? movies : 'No results for that search!'}
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
