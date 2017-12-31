import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Tabs from './components/Tabs.jsx';
import _ from 'underscore';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      filteredBy: null,
      activeTab: 'all'
    }
  }

  componentDidMount() {
    axios.get('/load')
      .then((response) => {
        this.setState({
          allMovies: response.data
        })
        // callback && callback();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  refreshMovies(callback) {
    axios.get('/movies')
      .then((response) => {
        this.setState({
          allMovies: response.data
        })
        callback && callback();
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
      filteredBy: query,
      activeTab: 'all'
    })
  }

  returnFilteredMovies(query) {
  
    let queryMovies = _.filter(this.state.allMovies, (movie) => {
      let passesQuery = query ? movie.title.toUpperCase().includes(query.toUpperCase()) : true;
      let isWatched = movie.watched;
      var matchesActiveTabState = false;
      if (this.state.activeTab === 'all') {
        matchesActiveTabState = true;
      } else if (this.state.activeTab === 'toWatch') {
        matchesActiveTabState = !movie.watched;
      } else {
        matchesActiveTabState = movie.watched;
      }

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

  toggleWatched(id) {
    var newState; 
    let copyOfMovies = this.state.allMovies.slice();
    let toggledMovies = copyOfMovies && copyOfMovies.map((movie) => {
      if (movie.id === id) {
        movie.watched = !movie.watched;
        newState = movie.watched;
      }
      return movie;
    })

    axios.patch(`/movie/${id}`, {
      watched: newState
    })
      .then((response) => {
        this.setState({
          allMovies: toggledMovies
        })     
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    let filteredMovies = this.returnFilteredMovies(this.state.filteredBy);

    let movies = filteredMovies && filteredMovies.map((movie) => {
      return <Movie 
        key={movie.id}
        watched={movie.watched ? true : false}
        title={movie.title}
        year={movie.release_date}
        overview={movie.overview}
        rating={movie.vote_average}
        thumbnail={`https://image.tmdb.org/t/p/w150${movie.poster_path}`}
        toggleWatched={this.toggleWatched.bind(this, movie.id)}/>
    })

    return (
      <Container>   
        <AddMovie addNewMovie={ this.addNewMovie.bind(this) } />
        <h2>Movie List</h2>
        
        <div className='headerContainer'>
          <Tabs 
            activeTab={this.state.activeTab} 
            changeTabSelection={ this.changeTab.bind(this) } 
          />

          <Search handleSearch={ this.updateMoviesList.bind(this) } />
        </div>
        <div className='movieContainer'>
          {movies.length > 0 ? movies : 'No results for that search!'}
        </div>
      </Container>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
