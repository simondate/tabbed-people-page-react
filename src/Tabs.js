import React, { Component } from 'react';
import './App.css';

class Tabs extends Component {
  render() {
    return (
      <div className="tab-container">
        <div className="tab">Position 1</div>
        <div className="tab">Position 2</div>
        <div className="tab">Position 3</div>
        <div className="tab">Position 4</div>
      </div>
    );
  }
}

export default Tabs;
