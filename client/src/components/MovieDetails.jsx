import React from 'react';
import { Button } from 'semantic-ui-react';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState ({
      isChecked: this.props.watched
    })
  }

  handleChange(event) {
    this.props.toggleWatched();
    this.setState({
      isChecked: event.target.checked
    })
  }

  render() {
    return (
       <div 
        className='movieDetails show'>  
        <div className='movieChild'>
          <ul >
            <li><strong>Year</strong>: {this.props.year}</li>
            <li><strong>Rating</strong>: {this.props.rating}</li>
            <li><strong>Overview</strong>: {this.props.overview}</li>  
          </ul>
          <label>
            <input 
              name="isChecked"
              type="checkbox"
              checked={this.state.isChecked}
              onChange = {this.handleChange}
              />
               Watched
          </label>
        </div>
        <div className="movieChild">
          <img src={this.props.thumbnail} / >         
        </div>
      </div>
    )
  }
}

module.exports = MovieDetails;