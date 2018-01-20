import React from 'react';

class Movie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			//change this to an array representing the index of each movie
			like: true,
		}
	}

	changethumb(index){
		//console.log('index: ', index)
		//set up a mapping function in here
		this.setState({
			like: !this.state.like,
		})

	}

	render(){
		var movieArray = this.props.movies.length ? this.props.movies : [];

		//needs to be linked to the index of the movie array
		var thumb = this.state.like === true ? "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/0a/Thumbs-up.png/revision/latest?cb=20121114201259" 
											 : "https://upload.wikimedia.org/wikipedia/commons/2/21/Not_facebook_dislike_thumbs_down.png";

		//works
		var filteredMovies = movieArray.filter( (movie, index) => {
			if(movie.title.toLowerCase().indexOf(this.props.searchVal.toLowerCase()) !== -1) {	
				return <div key={index} > {movie} </div>
			}
		});

		//inside here need to bind the onClick to the specific
		var movieElement = filteredMovies.map((movie, index) => {
			return(
				<div>
					{movie.title} <img style={{height: 40, width: 40}} src={thumb} onClick={this.changethumb.bind(this)} />
						<div>{movie.description}</div>
						<div>{movie.released}</div>
						<div>{movie.stars}</div>
				</div>
				)
			}
		)
		//handle empty search result
		if(movieElement.length === 0) {
			movieElement = 'No movies match this search...'
		}
		return(
			<div> {movieElement} </div>
			)
	}
}
export default Movie