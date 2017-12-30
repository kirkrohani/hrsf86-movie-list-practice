import React from 'react';

class Search extends React.Component {

	constructor(props) {
	  super(props);
	} 

	render() {
	  return (
	  	<div className = 'search'> 
	  		<input type = 'form' id = 'movieSearch' placeholder = 'Search..'/> 
	  		<button onClick = {() => this.props.onSubmitClick(document.getElementById('movieSearch').value)}> Go! </button>
	  	</div> 
	  )
	}
}

export default Search;

// <button onClick = {this.props.onSubmitClick(document.getElementById('movieSearch'))}> Go! </button>