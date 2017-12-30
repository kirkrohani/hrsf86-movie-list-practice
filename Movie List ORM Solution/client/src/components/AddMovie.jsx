import React from 'react';
import ReactDOM from 'react-dom';

const AddMovie = (props) => {
	return (
		<div id="addMovie">
			<form className="form-inline"><div className="form-group">
			<input id="addMovieField" type="text" defaultValue="Add A Movie..." type="email" className="form-control"></input>
			<button id="addMovieButton" onClick={props.onAddMovie} type="button" className="btn btn-primary">Add Movie</button>
			</div>
			</form>
		</div>
	)
}

export default AddMovie;