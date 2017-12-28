import React from 'react';

module.exports = (props) => {

  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search..." aria-label="Search..."/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button">Go!</button>
      </span>
    </div>
  );
}