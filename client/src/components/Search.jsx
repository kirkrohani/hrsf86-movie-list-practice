import React from 'react';
import ReactDOM  from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  
  handleValueChange(e){
    this.setState({
      value: e.target.value
    });
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="Search..."
          onChange={this.handleValueChange.bind(this)}
        ></input>
        <button type="button" 
          onClick={() => this.props.handleMovieSearch(this.state.value)}
        >GO</button>
      </div>
    )
  };

}



module.exports.Search = Search;