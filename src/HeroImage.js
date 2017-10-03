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
        <img className="hero-image" src={Data[0].heroImage.src} alt={Data[0].heroImage.alt}/>
        <div className="hero-image-hotspot-container">
          {this.createHotspots(Data[0].items)}
        </div>
      </div>
    );
  }

  createHotspots(data){
    return data.map(this.createHotspot, this);
  }

  createHotspot(item, i) {
   return <Hotspot setActive={this.changeTab.bind(this)} hotspot={item.hotspot} num={i} key={i}/>;
  }

  changeTab(i) {
    this.props.changeTab(i);
  }
}

export default HeroImage;
