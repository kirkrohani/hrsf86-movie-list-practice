import React from 'react';

export const WatchedBar = ({watchSelected, toggleWatchedView}) => {
    let watchStyle = {
        "fontWeight": watchSelected === true ? 'bold' : 'normal',
        "color": watchSelected === true ? '#16a086' : 'lightGrey'
    };
    let unwatchedStyle = {
        "fontWeight": watchSelected === false ? 'bold' : 'normal',
        "color": watchSelected === false ? '#16a086' : 'lightGrey'
    };
    let allStyle = {
        "color": watchSelected === null ? '#16a086' : 'lightGrey',
        "fontWeight": watchSelected === null ? 'bold' : 'normal'
    };
    
    return (
        <div onClick={toggleWatchedView} className="watched-bar">
            <span style={allStyle}>All</span>
            <span style={watchStyle}>Watched</span>
            <span style={unwatchedStyle}>Unwatched</span>
        </div>
    );
};