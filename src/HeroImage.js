import React, { Component } from 'react';
import './App.css';
import Data from './data/data.json';
import Hotspot from './Hotspot.js';

class HeroImage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.image);
  }

  render() {
    return (
        <div className="hero-image-container">
        <img className="hero-image" src={this.props.image}/>
        <div className="hero-image-hotspot-container">
          {this.createHotspots(Data[0].items)}
          hello
        </div>
      </div>
    );
  }

  createHotspots(data){
    return data.map(this.createHotspot, this);
    return null
  }

  createHotspot(item, i) {
   return <Hotspot hotspot={item.hotspot} key={i}/>;
  }

  setActive() {
    this.props.setActive(this.props.num);
  }
}

export default HeroImage;
