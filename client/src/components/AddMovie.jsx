import React from 'react';

export const AddMovie = ({value, submit, change}) => {
    return (
      <div className = "add-movie">
          <form onSubmit={submit}>
            <input type="text" placeholder="Add A Movie" value={value} onChange={change}/>
            <input type="submit" value="Add"/>
          </form>
      </div>
    );
};