import React from 'react';
class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      watched: false
    }
  this.watchedToggle = this.watchedToggle.bind(this)
  }

  watchedToggle(){
    this.setState({
      watched: !this.state.watched
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.movie.title}</td>
        {
          this.state.watched 
            ? <td><button onClick={this.watchedToggle}> Watched </button></td> 
            : <td><button onClick={this.watchedToggle}> Not Watched</button></td>    
        }
      </tr>
      )
  }
}

export default Movie;