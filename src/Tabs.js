import React, { Component } from 'react';
import './App.css';

class Tabs extends Component {
  render() {
    return (
      <div className="tab-container">
        <div className="tab">Person 1</div>
        <div className="tab">Person 2</div>
        <div className="tab">Person 3</div>
        <div className="tab">Person 4</div>
      </div>
    );
  }
}

export default Tabs;
