import React from 'react';
import ReactDOM  from 'react-dom';
import MoviesList from './components/MoviesList.jsx';

var movies = [
  { 
    id: 1,
    title: 'Mean Girls', 
      details: {
        year: 2004,
        runtime: 182,
        metascore: 66,
        imdb: 'http://www.imdb.com/title/tt0377092/?ref_=nv_sr_1',
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_UY268_CR3,0,182,268_AL_.jpg'
    }
  },
  {
    id: 2,
    title: 'Hackers',
    details: {
      year: 1995,
      runtime: 107,
      metascore: 46,
      imdb: 'http://www.imdb.com/title/tt0113243/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODg0NjQ5ODQ3OF5BMl5BanBnXkFtZTcwNjU4MjkzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  },
  {
    id: 3,
    title: 'The Grey',
    details: {
      year: 2011,
      runtime: 117,
      metascore: 64,
      imdb: 'http://www.imdb.com/title/tt1601913/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  },
  {
    id: 4,
    title: 'Sunshine',
    details: {
      year: 2007,
      runtime: 107,
      metascore: 64,
      imdb: 'http://www.imdb.com/title/tt0448134/?ref_=nv_sr_3',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTYwNTc1ODM3._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  },
  {
    id: 5,
    title: 'Ex Machina',
    details: {
      year: 2014,
      runtime: 108,
      metascore: 78,
      imdb: 'http://www.imdb.com/title/tt0470752/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  }
];


class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      list: movies
    }
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="container" >
        <div id="header" className="row">
          <h2>MovieList</h2>
        </div>
        <div id="control" className="row">
        </div>
        <div id="list" className="row">
          <div className="col-md">
            <MoviesList className="movies-list" list={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
