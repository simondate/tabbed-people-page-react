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
    console.log('in tabs');
    console.log(currentTab);
  }

  render() {
    console.log(this.props);
    this.setActive(this.props.currentTab);
    return (
      <div className="tab-container">
        <Tab setActive={this.setActive.bind(this)} name="Woman" description="She is holding some fruit." num="0"/>
        <Tab setActive={this.setActive.bind(this)} name="Topless guy" description="What a glorious beard." num="1"/>
        <Tab setActive={this.setActive.bind(this)} name="Spear guy" description="He doesn't seem to keen on whats happening." num="2"/>
      </div>
    );
  }
}

export default Tabs;
