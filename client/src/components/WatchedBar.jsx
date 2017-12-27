import React from 'react';

export const WatchedBar = ({watchSelected, toggleWatchedView}) => {
    let watchStyle = {
        "fontWeight": watchSelected === true ? 'bold' : 'normal',
    };
    let unwatchedStyle = {
        "fontWeight": watchSelected === false ? 'bold' : 'normal',
    };
    
    return (
        <div onClick={toggleWatchedView} className="watched-bar">
            <span style={watchStyle}>Watched</span>
            <span style={unwatchedStyle}>Unwatched</span>
        </div>
    );
};