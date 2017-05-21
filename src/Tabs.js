import React, { Component } from 'react';
import './App.css';
import Tab from './Tab.js'
import Data from './data/data.json';

class Tabs extends Component {
  constructor() {
    super();
    console.log(Data.length);
    //this.setActive(this.props.currentTab);
  }

  setActive(i){
    this.props.changeTab(Data[i].title, Data[i].text);
  }

  createTab(tab, i) {
    return <Tab setActive={this.setActive.bind(this)} name={tab.title} description={tab.text} num={i} key={i}/>;
  }

  createTabs(data){
    return data.map(this.createTab, this);
  }

  render() {
    return (
      <div className="tab-container">
        {this.createTabs(Data)}
      </div>
    );
  }
}

export default Tabs;
