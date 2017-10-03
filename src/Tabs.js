import React, {Component} from 'react';
import './App.css';
import Tab from './Tab.js'
import Data from './data/data.json';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Tabs extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.setCurrentTab(this.props.currentTab);
  }

  setCurrentTab(i) {
    this.props.changeTab(i);
  }

  isActive(id) {
    console.log(this.props.currentTab === id);
    return this.props.currentTab === id;
  }

  createTab(tab, i) {
    return <div>
      <Router>
        <Link to={`/${i}`}> <Tab setActive={this.setCurrentTab.bind(this)} isActive={this.isActive(i)} name={tab.title} num={i} key={i}/></Link>
      </Router>


    </div>;
  }

  createTabs(data) {
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
