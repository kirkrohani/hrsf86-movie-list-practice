import React from 'react';
import ReactDOM  from 'react-dom';

class MovieDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentMovie : props.currentMovie
        }
    }

    render() {
        return (<div> Some DeeTay </div>);
    }

}

module.exports = MovieDetails;