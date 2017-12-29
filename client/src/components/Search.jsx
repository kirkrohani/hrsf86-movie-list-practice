import React from 'react';
import ReactDOM from 'react-dom';

var Search = ({movies}) => {
    return (
        <form>
            <input id="search" />
            <button id="search"> Search Movie Database</button>
        </form>
    );
};

module.exports = Search;