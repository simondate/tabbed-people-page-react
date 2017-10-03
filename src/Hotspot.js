import React, { Component } from 'react';
import './App.css';

class Hotspot extends Component {
  constructor(props) {
    super(props);
    console.log(this.generateProps());
  }

  generateProps() {
    return {
      top: this.props.hotspot[0] + '%',
      left: this.props.hotspot[1] + '%',
      height: this.props.hotspot[2] + '%',
      width: this.props.hotspot[3] + '%'
    };
  }

  render() {
    return (
        <div onClick={this.setActive.bind(this)} style={this.generateProps()} className="hotspot"></div>
    );
  }

  setActive() {
    this.props.setActive(this.props.num);
  }
}

export default Hotspot;
