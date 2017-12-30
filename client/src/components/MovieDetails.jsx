import React from 'react';


class MovieDetails extends React.Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
		  <div className = 'details'>
		    <div> 
		  	Vote Average: {this.props.movie.rating} 
		  	</div>
		  	<div>
		  	Overview: {this.props.movie.overview}
		  	</div>
		  </div>
		  	
		

		)
	}




}



















export default MovieDetails