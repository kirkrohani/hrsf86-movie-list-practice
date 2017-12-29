import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
    this.props.handleSubmit(e.target.value)
  }



  render() {
    return (
      <div>
       <input 
        class="search-bar" 
        type="text" 
        placeholder="Search"
        value={this.state.value}
        onChange={this.handleInputChange.bind(this)}
        />
        <button 
        type="button"
        onClick={ () => this.props.handleSubmit(this.state.value)}
        >Send</button>
      </div>
      )
  }
} 