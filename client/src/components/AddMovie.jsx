import React from 'react';

export default class AddMovie extends React.Component {
 render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <input type="submit" value="Add Movie"/>
        </form>
      </div>
    )
  };
};
