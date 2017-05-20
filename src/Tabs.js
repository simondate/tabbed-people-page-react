import React, { Component } from 'react';
import './App.css';
import Tab from './Tab.js'

class Tabs extends Component {
  render() {
    return (
      <div className="tab-container">
        <Tab name="Woman"/>
        <Tab name="Topless guy"/>
        <Tab name="Spear guy"/>
      </div>
    );
  }
}

export default Tabs;
