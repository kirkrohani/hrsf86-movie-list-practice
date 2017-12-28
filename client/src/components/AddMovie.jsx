import React from 'react';

module.exports = (props) => {

  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Add movie title here..." aria-label="Add movie title here..."/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button">Go!</button>
      </span>
    </div>
  );
}