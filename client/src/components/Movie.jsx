import React from 'react';

export class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: this.props.watchListTitles.includes(this.props.movie.title) ? 'show-icon' : 'hide-icon',
            selected: this.props.selected.title === this.props.movie.title ? true : false
        };
        this.watchClick = this.watchClick.bind(this);
        this.selectMe = this.selectMe.bind(this);
    }

    watchClick () {
        let {watched} = this.state;
        const {toggleFromWatchList, movie} = this.props;
        toggleFromWatchList(movie.title);
        if (watched === 'hide-icon') {
            this.setState({'watched': 'show-icon'});
        } else {
            this.setState({'watched': 'hide-icon'});
        }
    }

    selectMe () {
        const {movie, selectThis} = this.props;
        const {selected} = this.state;
        this.setState({selected: !selected});
        selectThis(movie);
    }

    render() {
        const {movie} = this.props;
        const {watched, selected} = this.state;
        return (
            <div className = "mov-list">
                <span className="mov-title" onClick={this.selectMe}>{movie.title}</span>
                <img className="watch-button" onClick={this.watchClick} src="./images/eye.png" />
                <span className={watched}>Watched</span>
                {(selected && movie.description) &&
                <div className = "mov-info">
                    <img src={movie.url} alt={movie.title}/>
                    <span>{movie.year} | {movie.description}</span>
                </div>
                }
            </div>
        )
    }
} 