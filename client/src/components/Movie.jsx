import React from 'react';
import ReactDOM from 'react-dom';

const Movie = ({title}) => {
    return (
        <div className = "movList">{title}</div>
    )
};

export default Movie;