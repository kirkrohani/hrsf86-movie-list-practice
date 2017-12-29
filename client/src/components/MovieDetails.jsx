import React from 'react';
import { Button } from 'semantic-ui-react';

var MovieDetails = (props) => {

  return (
     <div 
      className='movieDetails show'>
        {/*<label>Watched
          <button 
            type="checkbox"
            checked={props.watched}
            onChange={ () => props.toggleWatched(props.title) } 
            name="watchedCheckbox" />
        </label> */}
      <Button compact color='pink'   
          className={props.watched ? 'watchButton watched' : 'watchButton'} 
          onClick={props.toggleWatched } >
          Watched
        </Button>
      <ul>
        <li><strong>Year</strong>: {props.year}</li>
        <li><strong>Rating</strong>: {props.rating}</li>
        <li><strong>Overview</strong>: {props.overview}</li>
        <img src={props.thumbnail} />
      </ul>
    </div>
  )
}

module.exports = MovieDetails;