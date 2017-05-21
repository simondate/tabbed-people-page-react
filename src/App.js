import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs.js';
import Textbox from './Textbox.js';
import {Router, Route, IndexRoute, HashHistory} from 'react-router'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0
    }
  }

  changeTab(newTab) {
    console.log('Changing tab in app.js');
    this.setState({currentTab: newTab});
  }

  render() {
    return (
      <div className="App">
        <div className="hero-image"/>
        <div className="wrapper">
          <Tabs changeTab={this.changeTab.bind(this)}/>
          <Textbox current={this.state.currentTab}/>
        </div>
      </div>
    );
  }
}

export default App;
