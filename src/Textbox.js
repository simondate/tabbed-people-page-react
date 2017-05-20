import React, { Component } from 'react';
import './App.css';

class Textbox extends Component {
  render() {
    return (
      <div className="textbox">
        <div className="textbox-title">My title goes here </div>
        <div className="textbox-body">My text goes here </div>
      </div>
    );
  }
}

export default Textbox;
