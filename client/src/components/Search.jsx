import React from 'react';


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
							   				onClick={this.handleClick(value)}
						 />
					</label>
					<input type="submit" value="Search" />
				</form>
			)
	}
}

export default Search;
