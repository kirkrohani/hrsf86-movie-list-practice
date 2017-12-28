import React from 'react';

export class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: this.props.watchListTitles.includes(this.props.title) ? 'show-icon' : 'hide-icon'
        };
        this.watchClick = this.watchClick.bind(this);
    }

    watchClick () {
        let {watched} = this.state;
        const {toggleFromWatchList, title} = this.props;
        toggleFromWatchList(title);
        if (watched === 'hide-icon') {
            this.setState({'watched': 'show-icon'});
        } else {
            this.setState({'watched': 'hide-icon'});
        }
    }

    render() {
        const {title} = this.props;
        let {watched} = this.state;
        return (
            <div className = "mov-list">
                <span className="mov-title">{title}</span>
                <img className="watch-button" onClick={this.watchClick} src="./images/eye.png" />
                <span className={watched}>Watched</span>
            </div>
        )
    }
} 