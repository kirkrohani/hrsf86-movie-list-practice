var React = require('react');
import $ from 'jquery';


var ajaxGet = (cb) => {
  console.log('getReq started')
    $.ajax({
    url: 'http://localhost:3000/movies',
    type: 'GET', 
    success: (data) => {
      console.log('GET request successful');
      cb(JSON.parse(data))
    }
  });
}

export default ajaxGet;