var React = require('react');
import $ from 'jquery';


var ajaxGetMovies = (cb) => {
  console.log('GET /movies started')
    $.ajax({
    url: 'http://localhost:3000/movies',
    type: 'GET', 
    success: (data) => {
      console.log('GET /movies request successful');
      cb(JSON.parse(data))
    }
  });
}

export default ajaxGetMovies;