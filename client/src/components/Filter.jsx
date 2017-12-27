import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      watched: false,
      toWatch: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    console.log('Changed');
    
    this.setState({ value: event.target.value });
    this.props.search(event.target.value);
  }

  handleWatched(event) {
    console.log('Watched');
    
    this.setState({ 
      watched: true,
      toWatch: false
    });

    this.props.watched({
      watched: true,
      toWatch: false,
    });
  }

  handleToWatch(event) {
    console.log('ToWatch');
    this.setState({ 
      toWatch: true,
      watched: false 
    });

    this.props.watched({
      watched: false,
      toWatch: true,
    });
  }

  handleClear(event) {
    this.setState({
      toWatch: false,
      watched: false,
      value: ''
    });
    this.props.clearFilters()
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." />
        <input type="submit" value="Watched" onClick={this.handleWatched} placeholder="Search..." />
        <input type="submit" value="To Watch" onClick={this.handleToWatch} placeholder="Search..." />      
        <input type="submit" value="Clear" onClick={this.handleClear}/>
      </div>      
    );
  }
}

module.exports = Filter;