import React, { Component } from 'react';
import './App.css';
import Tab from './Tab.js'
import Data from './data/data.json';

class Tabs extends Component {
  constructor() {
    super();
    console.log(Data);
    this.state = {
      currentTab: 0
    }
    //this.setActive(this.props.currentTab);
  }

  setActive(currentTab){
    console.log('in tabs');
    console.log(currentTab);
    this.props.changeTab(currentTab);
  }

  render() {
    console.log(this.props);
    return (
      <div className="tab-container">
        <Tab setActive={this.setActive.bind(this)} name={Data[0].title} description={Data[0].text} num="0"/>
        <Tab setActive={this.setActive.bind(this)} name={Data[1].title} description={Data[1].text} num="1"/>
        <Tab setActive={this.setActive.bind(this)} name={Data[2].title} description={Data[2].text} num="2"/>
      </div>
    );
  }
}

export default Tabs;
