import React from 'react';

export default class MovieDetails extends React.Component {

  render() {
    return (
      <div>
        <div>
          <div className="movie-details">{this.props.description}</div>
        </div>
      </div>
    );
  }
};