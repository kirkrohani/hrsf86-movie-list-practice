import React from 'react';

export class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: this.props.display, 
      showDetails: false
    }
  };



  // whatIsDisplay() {
  //    var display = 'hide' ? this.props.display === -1 : 'show'
  //    this.setState({
  //     display: display
  //    })
  // }

  render() {
    return (
      <div class={this.props.display}>
        <div>
          {this.props.movie.title}
          <button
          type="button"
          id={this.props.movie.title.split(' ').join('')}
          onClick={(e) => this.props.addToWatchList(`#${e.target.id}`, this.props.movie) }
          >Unwatched</button>
        </div>
      </div>
      )
  }

}



