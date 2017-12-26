import React from 'react';

class AddMovie extends React.Component {

  constructor(props) {
  	super(props);
  }


  render() {
  	return (
  	  <div className = 'addmovie'>
  	    <input type = 'text' id = 'movieAdd' placeholder = 'Add a movie title here'/> 
  	    <button onClick = {() => this.props.onAddClick(document.getElementById('movieAdd').value)}> Add </button>
  	  </div>
  	)
  }







}
























export default AddMovie;