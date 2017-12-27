import React from 'react';

module.exports = (props) => {

  return (
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search..." aria-label="Search..."/>
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Go!</button>
      </span>
    </div>
  );
}