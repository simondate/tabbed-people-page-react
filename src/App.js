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

  changeTab(title, text) {
    this.setState({title: title});
    this.setState({text: text});
  }

  render() {
    //this.changeTab("default", "default");
    return (
      <div className="App">
        <div className="hero-image"/>
        <div className="wrapper">
          <Tabs changeTab={this.changeTab.bind(this)}/>
          <Textbox title={this.state.title} text={this.state.text}/>
        </div>
      </div>
    );
  }
}

export default App;
