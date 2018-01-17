import React from 'react';

class Movie extends React.Component {
	constructor(props){
		super();
		this.state = {
			like: true,
			thumbsUp: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/0a/Thumbs-up.png/revision/latest?cb=20121114201259",
		}
	}

	changethumb(){
		this.setState({
			like: !this.state.like,
		})
	}

	render(){
		var thumbsUp = "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/0a/Thumbs-up.png/revision/latest?cb=20121114201259";
		var movieArray = this.props.movies.length ? this.props.movies : [];

		//console.log('search: ', this.props.searchVal)
		var thumb = this.state.like === true ? "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/0a/Thumbs-up.png/revision/latest?cb=20121114201259" 
											 : "https://upload.wikimedia.org/wikipedia/commons/2/21/Not_facebook_dislike_thumbs_down.png";
		//console.log(thumb)
		var filteredMovies = movieArray.filter( (movie, index) => {
			if(movie.title.indexOf(this.props.searchVal) !== -1) {	
				return movieArray[index];
			}
		});
		//console.log(this.state.like)
		var movieElement = filteredMovies.map((movie, index) =>
			<div key={index}>
			{movie.title} <img style={{height: 40, width: 40}} src={thumb} onClick={this.changethumb.bind(this)} />
			<div>{movie.description}</div>
			<div>{movie.released}</div>
			<div>{movie.stars}</div>

			</div>
		)
		if(movieElement.length === 0) {
			movieElement = 'No movies match this search...'
		}
		return(
			<div> {movieElement} </div>
			)
	}
}
export default Movie