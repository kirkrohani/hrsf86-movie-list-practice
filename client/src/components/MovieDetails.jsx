import React from 'react';


class MovieDetails extends React.Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
		  <div className = 'details'>
		    <div> 
		  	Runtime: {this.props.movie.runtime} 
		  	</div>
		  	<div>
		  	Year: {this.props.movie.year}
		  	</div>
		  </div>
		  	
		

		)
	}




}



















export default MovieDetails