var React = require('react');
import $ from 'jquery';


var ajaxPost = (newMovie) => {
  console.log('Post Req started')
  console.log('Movie to add', newMovie)
  var movie = JSON.stringify({title: newMovie});
    $.ajax({
    url: 'http://localhost:3000/movies',
    type: 'POST',
    contentType: 'application/json', 
    data: movie, 
    success: (data) => {
      console.log('sending data', data)
    }
  });
}

export default ajaxPost;