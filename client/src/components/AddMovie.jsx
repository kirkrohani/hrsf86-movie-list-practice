import React from 'react';
import ReactDOM  from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
  	super(props);
  	this.newFilm = this.newFilm.bind(this);
 
  }
  newFilm(e) {
  	if (e.key == 'Enter') {
  	  this.props.addFilm(e.target.value);
  	}
  }
  
  render() {
  	const search = this.props.search;
  	return <div> 
  	  <input type="text" defaultValue={search} onKeyPress={this.newFilm} /><button onClick={this.newFilm}>Add New Movie</button>
  	</div>
  }
}

export default AddMovie;