import React, { Component } from 'react';
import './App.css';
import Tab from './Tab.js'

class Tabs extends Component {
  constructor() {
    super();
    console.log(this.props);
    //this.setActive(this.props.currentTab);
  }

  setActive(currentTab){
    console.log(currentTab);
  }

  render() {
    console.log(this.props);
    this.setActive(this.props.currentTab);
    return (
      <div className="tab-container">
        <Tab name="Woman" description="She is holding some fruit."/>
        <Tab name="Topless guy" description="What a glorious beard."/>
        <Tab name="Spear guy" description="He doesn't seem to keen on whats happening."/>
      </div>
    );
  }
}

export default Tabs;
