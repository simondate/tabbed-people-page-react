import React, {Component} from 'react';
import './App.css';

class Tab extends Component {
  isActive() {
    if (this.props.isActive) {
      return "active";
    } else {
      return "";
    }
  }

  render() {
    return (
      <button onClick={this.tabSelected.bind(this)} className={"tab " + this.isActive()}>{this.props.name}</button>
    );
  }

  tabSelected() {
    this.props.setActive(this.props.num);
  }
}

export default Tab;
