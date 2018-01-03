var React = require('react');
import $ from 'jquery';


var ajaxGetLoad = (cb) => {
  console.log('Get /load started')
    $.ajax({
    url: 'http://localhost:3000/load',
    type: 'GET', 
    success: (data) => {
      console.log('GET /load request successful');
      cb(JSON.parse(data))
    }
  });
}

export default ajaxGetLoad;