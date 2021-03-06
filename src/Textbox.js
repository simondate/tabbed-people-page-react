import React, { Component } from 'react';
import './App.css';

class Textbox extends Component {
  render() {
    return (
      <div className="textbox">
        <h3 className="textbox-title">{this.props.title}</h3>
        <div className="textbox-body">{this.props.text}</div>
      </div>
    );
  }
}

export default Textbox;
