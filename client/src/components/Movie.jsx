import React from 'react';
import ReactDOM from 'react-dom';

const Movie = ({title}) => {
    return (
        <div className = "mov-list">{title}</div>
    )
};

export default Movie;