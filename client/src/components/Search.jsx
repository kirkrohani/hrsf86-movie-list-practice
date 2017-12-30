import React from 'react';

const Search = (props) => {
	return (
		<div>
			<input id="searchBar" type="text" defaultValue='Search...'/>
			
			<button type="button" onClick={props.onSearchClick}>Go!</button>
		</div>
	);

};

export default Search

