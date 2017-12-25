import React from 'react';

const AddMovie = (props) => {

	var onEnter = (e) => {
		if(e.which === 13) {
			props.onAddMovie();
		}
	}
	
	return (
		<div>
		<input id="newMovie" type="text" defaultValue="Add A Movie..." onKeyPress={onEnter}/>
			<button onClick={props.onAddMovie}>Add</button>
		</div>
	);
};

export default AddMovie