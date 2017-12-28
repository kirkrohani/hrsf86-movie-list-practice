import React from 'react';
import ReactDOM  from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
  	super(props);
  	this.newFilm = this.newFilm.bind(this);
 
  }
  newFilm(e) {
  	this.props.addFilm(e.value);
  }
  
  render() {
  	const search = this.props.search;
  	return <div> 
  	  <input type="text" value={search} /><button onClick={this.newFilm}>Add New Movie</button>
  	</div>
  }
}

export default AddMovie;