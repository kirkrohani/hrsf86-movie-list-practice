import React from 'react';
import ReactDOM  from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: ''
    };
  }

  handleTitleText(e) {
    this.setState({
      titleText: e.target.value
    });
  }

  render(){
    return (
      <div>
        <input type="text" placeholder="Add movie title here"
          onChange={this.handleTitleText.bind(this)}
        ></input>
        <button type="button"
          onClick={() => this.props.handleMovieTitleAdd(this.state.titleText)}
        >Add</button>
      </div>
    )
  }

}


module.exports.AddMovie = AddMovie;