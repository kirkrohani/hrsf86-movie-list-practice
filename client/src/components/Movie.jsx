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
            <div onClick={this.selectMe} className = "mov-list" style={movie.vote_average >= 7 ? {'background-color' : '#b1efe3'} : movie.vote_average > 5 ? {'background-color': '#fcefde'} : {'background-color': '#ff8282'}}>
                <div className = "container">
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.backdrop_path}`} />
                    <span className="mov-title" >{movie.title}</span>
                    <img className="watch-button" onClick={this.watchClick} src="./images/eye.png" />
                    <span className={watched}>Watched</span>
                </div>
                {selected &&
                <div className = "mov-info">
                    <div className="movie-rating" style={movie.vote_average >= 7 ? {'color' : 'green'} : movie.vote_average > 5 ? {'color': 'orange'} : {'color': 'red'}}>{movie.vote_average}</div>
                    <div className="release-date">Released: {movie.release_date} </div> 
                    <div className="movie-overview"> {movie.overview}</div>
                </div>
                }
            </div>
        )
    }
} 