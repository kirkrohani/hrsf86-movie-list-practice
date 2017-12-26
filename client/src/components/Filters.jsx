import React from 'react';
import ReactDOM  from 'react-dom';

import Search from './Search.jsx';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log(event.target);
    event.preventDefault();
    this.setState({value: ''});
    this.props.clearFilters('');
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.onSearch(event.target.value);
  }


  render() {
    console.log(this.props.watchedFilter)
    // extrapolate button classes from props
    let watchedClass = ""
    let toWatchClass = ""
    let inputClass = "form-control"
    if(this.props.watchedFilter === "watched") {
      watchedClass += " active";
    }
    if(this.props.watchedFilter === "unwatched") {
      toWatchClass += " active";
    }
    if(this.state.value) {
      inputClass += " active";
    }

    return (
    <div className="filters">
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className={inputClass} type="text" value={this.state.value} onChange={this.handleChange} placeholder="Filter..."/>
        </div>
        <div className="form-group">
          <button type="button" className={watchedClass} onClick={() => this.props.onToggleFilter("watched")}>Watched</button>
          <button type="button" className={toWatchClass} onClick={() => this.props.onToggleFilter("unwatched")}>To Watch</button>
          <button type="submit">Clear</button>
        </div>
      </form>
    </div>
  )
  }
}

module.exports = Filters;