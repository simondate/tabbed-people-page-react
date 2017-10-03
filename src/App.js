import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs.js';
import Textbox from './Textbox.js';
import Data from './data/data.json';
import HeroImage from './HeroImage.js';
import {Router, Route, IndexRoute, HashHistory} from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0
    }
  }

  changeTab(i) {
    this.setState({title: Data[0].items[i].title});
    this.setState({text: Data[0].items[i].text});
  }

  render() {
    //this.changeTab("default", "default");
    return (
      <div className="App">
        <HeroImage image={Data[0].heroImage.src}/>
        <div className="wrapper">
          <Tabs currentTab={this.state.currentTab} changeTab={this.changeTab.bind(this)}/>
          <Textbox title={this.state.title} text={this.state.text}/>
        </div>
      </div>
    );
  }
}

export default App;
