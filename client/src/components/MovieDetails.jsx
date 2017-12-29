import React from 'react';

export var MovieDetails = ({movie, displayClass, showDetails}) => (
  <div 
  class={displayClass}
  >
    <div> 
    Year: {movie.year}
    </div>
     <div> 
    Metascore: {movie.MetaScore}
    </div>      
  </div>
  )