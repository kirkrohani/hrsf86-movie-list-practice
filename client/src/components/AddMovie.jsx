import React from 'react';

module.exports = (props) => {

  return (
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Add movie title here..." aria-label="Add movie title here..."/>
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Go!</button>
      </span>
    </div>
  );
}