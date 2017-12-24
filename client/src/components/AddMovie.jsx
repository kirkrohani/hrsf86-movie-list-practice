import React from 'react';

const AddMovie = (props) => {
	return (
		<div>
		<input id="newMovie" type="text" defaultValue="Add A Movie..."/>
			<button onClick={props.onAddMovie}>Add</button>
		</div>
	);
};

export default AddMovie