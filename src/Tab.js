import React, { Component } from 'react';
import './App.css';

class Tab extends Component {
  render() {
    console.log(this.props);
    return (
        <button onClick={this.setActive.bind(this)} className="tab">{this.props.name}</button>
    );
  }

  setActive() {
    console.log(this.props.num);
    const num = this.props.num;
    this.props.setActive(num);
  }


}

export default Tab;
