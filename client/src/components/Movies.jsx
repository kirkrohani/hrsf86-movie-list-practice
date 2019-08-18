import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './Movie.jsx';
import MovieDetails from './MovieDetails.jsx'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props.list);
    return (
      <div>
        <div className="navigation">
        <button type="submit" onClick={() => {console.log('clicked')}}>Watched</button>
        <button type="submit" onClick={() => {console.log('clicked')}}>To Watch</button>
        <button type="submit" onClick={() => {console.log('clicked')}}>Main List</button>
        </div>
        <div className="main-list">
          <ul className="list">
            {this.props.list.map((movie) => <Movie key={movie.id} id={movie.id} title={movie.original_title} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Movies;