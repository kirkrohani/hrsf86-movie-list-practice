import React from 'react';

module.exports = class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formVal: ''};
    this.enter = this.enter.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  enter(e) {
    if (e.which === 13) {
      this.clickHandler();
    }
  }
  clickHandler() {
    this.props.handler(this.state.formVal);
    this.setState({formVal: ''});
  }
  handleChange(e) {
    this.setState({formVal: e.target.value});
  }
  render() {
    return (
      <div className="input-group">
        <input type="text"
          className="form-control"
          placeholder="Add movie title here..."
          aria-label="Add movie title here..."
          value={this.state.formVal}
          onKeyUp={this.enter}
          onChange={this.handleChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button" onClick={this.clickHandler}>Go!</button>
        </span>
      </div>
    );
  }
}