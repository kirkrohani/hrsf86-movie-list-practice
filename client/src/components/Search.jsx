import React from 'react';

//not connected yet

class Search extends React.Component {
	constructor() {
		super()
	}
	render() {
		return(
				<form onSubmit={this.handleSubmit}>
					<label>
						<input type="text" placeholder="movie title"
							   				value={this.state.searchVal}
							   				onClick={this.handleClick(value).bind(this)}
						 />
					</label>
					<input type="submit" value="Search" />
				</form>
			)
	}
}

export default Search;
