import React, { Component } from 'react';
import './App.css';

class Tab extends Component {
  constructor() {
    super();
  }

  render() {

    return (
        <button onClick={this.setActive.bind(this)} className="tab">{this.props.name}</button>
    );
  }

  setActive() {
    console.log(this.props);
    this.props.setActive(this.props.num);
  }
}

export default Tab;
