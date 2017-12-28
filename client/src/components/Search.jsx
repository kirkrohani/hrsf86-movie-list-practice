import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      queryFn: this.props.getSearchQuery
    };
  }

  handleInput(event) {
    this.props.filterMLbyQuery(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleInput.bind(this)}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}
