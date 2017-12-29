import React from 'react';
import ReactDOM from 'react-dom';

var AddMovie = ({movies}) => {
    return (
        <form>
            <input id="add" />
            <button id="add"> Add to Movie Database</button>
        </form>
    );
};

module.exports = AddMovie;