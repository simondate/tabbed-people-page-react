import React, { Component } from 'react';
import './App.css';

class Tab extends Component {
  render() {
    return (
        <div className="tab">{this.props.name}</div>
    );
  }
}

export default Tab;
