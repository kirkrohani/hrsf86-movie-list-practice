import React from 'react';
import ReactDOM from 'react-dom';

const Search = (props) => {
	return (
		<div id="search">
		<form className="form-inline"><div className="form-group">
			<input id="searchMovieField" input="text" defaultValue="Search Here..." type="email" className="form-control"></input>
			<button id="searchMovieButton" onClick={props.onSearchMovie} type="button" className="btn btn-success">Search</button>
				</div>
			</form>
		</div>
	)
}

export default Search;