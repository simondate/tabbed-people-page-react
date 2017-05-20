import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs.js';
import Textbox from './Textbox.js';

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="hero-image"/>
        <div className="wrapper">
          <Tabs changeTab={this.changeTab.bind(this)}/>
          <Textbox current={this.state.currentTab}/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
