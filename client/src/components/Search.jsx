import React from 'react';
import ReactDOM  from 'react-dom';


const Search = (props) => {
	return (<div>
		<input type="text"/>
		<button onClick={props.handleClick}>Search</button>
	</div>);
}

export default Search