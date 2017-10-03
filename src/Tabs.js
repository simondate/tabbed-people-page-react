import React, { Component } from 'react';
import './App.css';
import Tab from './Tab.js'
import Data from './data/data.json';

class Tabs extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.setCurrentTab(this.props.currentTab);
  }

  setCurrentTab(i){
    this.props.changeTab(i);
  }

  createTab(tab, i) {
    return <Tab setActive={this.setCurrentTab.bind(this)} name={tab.title} description={tab.text} num={i} key={i}/>;
  }

  createTabs(data){
    return data.map(this.createTab, this);
  }

  render() {
    return (
      <div className="tab-container">
        {this.createTabs(Data[0].items)}
      </div>
    );
  }
}

export default Tabs;
