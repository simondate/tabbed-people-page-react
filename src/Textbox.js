import React, { Component } from 'react';
import './App.css';

class Textbox extends Component {
  render() {
    return (
      <div className="textbox">
        <h3 className="textbox-title">{this.props.current}</h3>
        <div className="textbox-body">My text goes here </div>
      </div>
    );
  }
}

export default Textbox;
