import React from 'react';

class Tabs extends React.Component {
  render() {
    return (
      <div className='tabContainer'>
        <button className={(this.props.activeTab === 'watched') ? 'tab active' : 'tab'} onClick={ () => this.props.changeTabSelection('watched') } >Watched</button>
        <button className={(this.props.activeTab === 'toWatch') ? 'tab active' : 'tab'} onClick={ () => this.props.changeTabSelection('toWatch') } >To Watch</button>
      </div>); 
  }
}

module.exports = Tabs;